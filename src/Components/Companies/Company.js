import React, { useState, useEffect } from "react";
import Header from "../Header";
import JoblyApi from "../../api";
import { useParams } from "react-router-dom";
import JobCard from "../Jobs/JobCard";
import { v4 as uuid } from "uuid";

const Company = () => {
  const [currCompany, setCurrCompany] = useState({
    name: "",
    description: "",
    jobs: [],
  });
  const { handle } = useParams();
  console.log(handle);

  useEffect(() => {
    const getOneCompany = async (handle) => {
      const res = await JoblyApi.getCompany(handle);
      setCurrCompany(res);
      console.log(res);
    };
    getOneCompany(handle);
    console.log("effect ran, set company as: ", currCompany);
    return () => {};
  }, []);

  return (
    <>
      <Header
        title={currCompany.name}
        category="Company"
        description={currCompany.description}
      />

      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
        <div className="mb-4 lg:mb-6 shadow-xl text-white rounded-2xl bg-gradient-to-r from-deep-purple-accent-400 via-purple-200 to-white px-4 py-2  lg:py-4 font-mono rounded flex flex-col justify-center items-center w-64 sm:mx-auto">
          <p>Employees: {currCompany.numEmployees}</p>
          <p>Available jobs: {currCompany.jobs.length}</p>
        </div>
        <div className="relative grid gap-5 lg:grid-cols-1">
          {currCompany.jobs.map((j) => (
            <JobCard key={uuid()} job={j} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Company;
