import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Auth/authContext";
import JobCard from "../Jobs/JobCard";
import JoblyApi from "../../api";
import { v4 as uuid } from "uuid";

const AppliedJobsSection = () => {
  const { currUser } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  console.log(currUser.applications);

  useEffect(() => {
    const getJobs = async () => {
      const pArr = currUser.applications.map((id) => JoblyApi.getJob(id));
      const jobs = await Promise.all(pArr);
      setJobs(jobs);
    };

    getJobs();
  }, []);

  /*   const getJobs = async () => {
    const pArr = currUser.applications.map(JoblyApi.getJob.bind(JoblyApi));
    const jobs = await Promise.all(pArr);
    setJobs(jobs);
  };

  useEffect(() => {
    getJobs();
  }, []); */

  return (
    <>
      <div>
        <h2 className="text-center text-4xl">Jobs I've Applied To</h2>
      </div>
      <div>
        {currUser.applications.map((jobId) => (
          <p>Job id: {jobId}</p>
        ))}
      </div>
      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
        <div className="relative grid gap-5 lg:grid-cols-1">
          {jobs.map((app) => (
            <JobCard key={uuid()} job={app} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobsSection;
