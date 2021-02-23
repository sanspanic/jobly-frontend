import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";
import { useParams } from "react-router-dom";
import Header from "../Header";
import CompanyCard from "../Companies/CompanyCard";

const Job = () => {
  const [job, setJob] = useState({
    title: "",
    salary: "",
    equity: "",
    company: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const getJob = async (id) => {
      const res = await JoblyApi.getJob(id);
      setJob(res);
    };
    getJob(id);
    return () => {};
  }, []);

  return (
    <>
      <Header title={job.title} category="Job" description={job.company.name} />

      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
        <div className="mb-4 lg:mb-6 shadow-xl text-white rounded-2xl bg-gradient-to-r from-deep-purple-accent-400 via-purple-200 to-white px-4 py-2  lg:py-4 font-mono rounded flex flex-col justify-center items-center w-64 sm:mx-auto">
          <p>Salary: £{job.salary.toLocaleString()}</p>
          <p>Equity: {job.equity ? job.equity : "N/A"}</p>
        </div>
        {console.log(job.company)}
        <CompanyCard company={job.company} />
      </div>
    </>
  );
};

export default Job;
