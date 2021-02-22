import React, { useState, useEffect } from "react";
import Header from "../Header";
import JoblyApi from "../../api";
import { useParams } from "react-router-dom";

const Company = () => {
  const [currCompany, setCurrCompany] = useState({});
  const { handle } = useParams();
  console.log(handle);

  useEffect(() => {
    const getOneCompany = async (handle) => {
      const res = await JoblyApi.getCompany(handle);
      setCurrCompany(res);
      console.log(res);
    };
    getOneCompany(handle);
    console.log(currCompany);
    return () => {};
  }, []);

  return (
    <>
      <Header
        title={currCompany.name}
        category="Company"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
      />
      <div>Jobs:</div>
    </>
  );
};

export default Company;
