import React, { useState, useEffect } from "react";

const FilterJobsForm = ({ addFilterCriteria }) => {
  const initialState = { title: "", hasEquity: false, minSalary: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending data for request: ", formData);
    addFilterCriteria(formData);
    setFormData(initialState);
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pb-24 mx-auto">
        <form onSubmit={handleSubmit}>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label htmlFor="title" class="leading-7 text-sm text-gray-600">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="job title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-accent-400 focus:bg-transparent focus:ring-2 focus:ring-teal-accent-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div class="relative flex-grow w-full">
              <label
                htmlFor="minSalary"
                class="leading-7 text-sm text-gray-600"
              >
                Minimum Salary
              </label>
              <input
                type="text"
                id="minSalary"
                name="minSalary"
                placeholder="minimum salary"
                value={formData.minSalary}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-accent-400 focus:bg-transparent focus:ring-2 focus:ring-teal-accent-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div class="relative flex-grow w-12 text-center mx-auto">
              <label
                htmlFor="hasEquity"
                className="leading-7 text-sm text-gray-600"
              >
                Equity
              </label>
              <input
                type="checkbox"
                id="hasEquity"
                name="hasEquity"
                checked={formData.hasEquity}
                onChange={handleCheckboxChange}
                className="checked:bg-teal-accent-400 h-9 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent ease-in-out"
              ></input>
            </div>
          </div>
          <div class="flex justify-center pt-4">
            <button class="z-50 mx-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              Filter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterJobsForm;
