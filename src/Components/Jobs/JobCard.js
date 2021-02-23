import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
      <div className="flex items-center justify-between p-5">
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
            <img src={`../Logos/1.png`}></img>
          </div>
          <p className="mb-2 font-bold font-mono">{job.title}</p>
          <p className="mb-1 text-sm leading-5 text-gray-900 italic">
            Salary:{" "}
            <span className="font-normal not-italic">
              £{job.salary ? job.salary : " N/A"}
            </span>
          </p>
          <p className="text-sm leading-5 text-gray-900 italic">
            Equity: <span className="font-normal not-italic">{job.equity}</span>
          </p>
        </div>
        <button className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 foxus:shadow-outline focus:outline-none transition-duration-200 rounded">
          Apply
        </button>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
    </div>
  );
};

export default JobCard;
