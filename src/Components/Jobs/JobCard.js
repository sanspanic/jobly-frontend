import React, { useState, useEffect } from "react";

const JobCard = ({ job }) => {
  //fake logos: generate random num between 1-26 to select from logos served in public
  const [randNum, setRandNum] = useState(0);

  useEffect(() => {
    const num = Math.floor(Math.random() * 26) + 1;
    setRandNum(num);
    return () => {};
  }, []);

  return (
    <div className="cursor-pointer flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
      <div className="flex items-center justify-between p-5">
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
            <img src={`../Logos/${randNum}.png`}></img>
          </div>
          <p className="mb-2 font-bold font-mono">{job.title}</p>
          {job.companyName && (
            <p className="text-sm leading-5 text-gray-900 italic">
              Company:{" "}
              <span className="font-normal not-italic">{job.companyName}</span>
            </p>
          )}
          <p className="mb-1 text-sm leading-5 text-gray-900 italic">
            Salary:{" "}
            <span className="font-normal not-italic">
              £{job.salary ? job.salary : " N/A"}
            </span>
          </p>
          <p className="text-sm leading-5 text-gray-900 italic">
            Equity:{" "}
            <span className="font-normal not-italic">
              {job.equity ? job.equity : "N/A"}
            </span>
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
