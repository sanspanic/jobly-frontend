import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import JobCard from "./JobCard";
import JoblyApi from "../../api";
import { v4 as uuid } from "uuid";
import FilterJobsForm from "./FilterJobsForm";
import ProtectedRoute from "../Auth/ProtectedRoute";
import AuthContext from "../Auth/authContext";
import { useHistory } from "react-router-dom";
import Spinner from "../FormComponents/Spinner";
import FormErrorHandler from "../FormComponents/FormErrorHandler";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { currUser } = useContext(AuthContext);
  const [hasNoMatch, setHasNoMatch] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  useEffect(() => {
    const getJobs = async (criteria) => {
      try {
        setErrorMsgs([]);
        setIsLoading(true);
        setHasNoMatch(false);
        //remove empty strings from criteria, which would otherwise throw server error
        const cleanedCriteria = {};
        for (const property in criteria) {
          if (criteria[property] != "") {
            cleanedCriteria[property] = criteria[property];
          }
        }
        const res = await JoblyApi.getJobs(cleanedCriteria);
        if (res.length === 0) {
          setHasNoMatch(true);
        }
        setJobs(res);
        setIsLoading(false);
      } catch (e) {
        setErrorMsgs(e);
        setIsLoading(false);
      }
    };

    getJobs(filterCriteria);

    return () => {};
  }, [filterCriteria]);

  const addFilterCriteria = (formData) => {
    setFilterCriteria(formData);
  };

  return (
    <>
      {currUser.username ? (
        <div className="bg-gray-100">
          <Header
            title="All jobs"
            category="jobs"
            description="Browse through all listed jobs below. See something you like? Apply via the 'apply' button."
          />
          <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            {/*             <CircleSVG />
             */}{" "}
            <FilterJobsForm addFilterCriteria={addFilterCriteria} />
            {isLoading && (
              <div className="font-xl font-mono text-center">
                <Spinner />
              </div>
            )}
            {hasNoMatch && (
              <div className="text-center font-mono">
                Oops! Your search didn't return any matches.
              </div>
            )}
            {errorMsgs.length > 0 && (
              <div className="text-center font-mono text-red-400 pb-10">
                Ooops, you entered an invalid search term! Try again.{" "}
              </div>
            )}
            <div className="relative grid gap-5 grid-cols-1 sm:grid-cols-2">
              {jobs.map((j) => (
                <JobCard job={j} key={uuid()} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ProtectedRoute />
      )}
    </>
  );
};

export default Jobs;
