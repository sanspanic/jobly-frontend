import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import logo from "../../Assets/Logos/earth.png";

const CompanyCard = ({ company }) => {
  //fake logos: generate random num between 1-26 to select from logos served in public
  const [randNum, setRandNum] = useState(0);

  useEffect(() => {
    const num = Math.floor(Math.random() * 26) + 1;
    setRandNum(num);
    return () => {};
  }, []);

  //redirect to company page on click
  const history = useHistory();
  const redirect = () => {
    history.push(`companies/${company.handle}`);
  };

  return (
    <div
      onClick={redirect}
      className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
    >
      <div className="p-5">
        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
          {/*           <svg
            className="w-8 h-8 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg> */}
          <img src={`Logos/${randNum}.png`}></img>
        </div>
        <p className="mb-2 font-bold">{company.name}</p>
        <p className="mb-1 text-sm leading-5 text-gray-900 italic">
          Number of employees:{" "}
          <span className="font-normal not-italic">{company.numEmployees}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
          Description:{" "}
          <span className="font-normal not-italic">{company.description}</span>
        </p>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
    </div>
  );
};

export default CompanyCard;
