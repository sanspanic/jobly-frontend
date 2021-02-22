import React, { useEffect, useState } from "react";
import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";
import CircleSVG from "./CircleSVG";
import Header from "../Header";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
    };
    getCompanies();
    return () => {};
  }, []);

  return (
    <div className="bg-gray-100">
      <Header
        title="These companies are recruiting"
        category="companies"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae."
      />
      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
        <CircleSVG />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((c) => (
            <CompanyCard company={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
