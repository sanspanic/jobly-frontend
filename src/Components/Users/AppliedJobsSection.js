import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Auth/authContext";
import JobCard from "../Jobs/JobCard";
import JoblyApi from "../../api";

const AppliedJobsSection = () => {
  const { currUser } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  console.log(currUser.applications);

  useEffect(() => {
    const getAppliedToJob = async (id) => {
      const job = await JoblyApi.getJob(id);
      setJobs([...jobs, job]);
    };

    currUser.applications.map((id) => {
      getAppliedToJob(id);
    });

    return () => {};
  }, []);

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
      {jobs.map((app) => (
        <JobCard job={app} />
      ))}
    </>
  );
};

export default AppliedJobsSection;
