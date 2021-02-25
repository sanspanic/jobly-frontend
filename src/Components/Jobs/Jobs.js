import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import JobCard from "./JobCard";
import CircleSVG from "../Companies/CircleSVG";
import JoblyApi from "../../api";
import { v4 as uuid } from "uuid";
import FilterJobsForm from "./FilterJobsForm";
import ProtectedRoute from "../Auth/ProtectedRoute";
import AuthContext from "../Auth/authContext";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({});
  const { currUser } = useContext(AuthContext);
  console.log("rendering jobs page, ", currUser);

  useEffect(() => {
    const getJobs = async (criteria) => {
      const res = await JoblyApi.getJobs(criteria);
      setJobs(res);
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
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae."
          />
          <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            <CircleSVG />
            <FilterJobsForm addFilterCriteria={addFilterCriteria} />
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
