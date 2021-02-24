import React, { useState, useContext } from "react";
import AuthContext from "./authContext";
import AuthSVG from "./AuthSVG";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const initialState = {
    username: "sandy",
    password: "password",
  };

  const [formData, setFormData] = useState(initialState);
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(formData);
      setFormData(initialState);
      history.push("/jobs");
    } catch (e) {
      console.log("OOOOPS");
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center sm:px-5 py-2">
      <div className="w-11/12 sm:w-10/12 bg-gray-100 text-gray-500 rounded-3xl shadow-xl  overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-teal-400 py-10 px-10">
            <AuthSVG />
          </div>
          <div className="w-full md:w-1/2 py-8 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
              <p>Enter your information to login</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label
                    htmlFor="username"
                    className="text-xs font-semibold px-1"
                  >
                    Username
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="JohnSmith"
                      onChange={handleChange}
                      name="username"
                      value={formData.username}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3 ">
                <div className="w-full px-3 mb-3">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex mb-5 lg:mb-20">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="********"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full transition duration-200 max-w-xs mx-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
