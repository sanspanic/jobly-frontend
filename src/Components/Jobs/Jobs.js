import React, { useState, useEffect } from "react";
import Header from "../Header";
import FilterForm from "../Companies/FilterForm";
import JobCard from "./JobCard";
import CircleSVG from "../Companies/CircleSVG";
import JoblyApi from "../../api";
import { v4 as uuid } from "uuid";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    };
    getJobs();
    return () => {};
  }, []);

  return (
    <div className="bg-gray-100">
      <Header
        title="All jobs"
        category="jobs"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque rem aperiam, eaque ipsa quae."
      />
      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
        <CircleSVG />
        {/*         <FilterForm addFilterCriteria={addFilterCriteria} />
         */}{" "}
        <div className="relative grid gap-5 grid-cols-2">
          {jobs.map((j) => (
            <JobCard job={j} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
