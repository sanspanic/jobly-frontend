import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";
import AuthContext from "./Components/Auth/authContext";
import JobsContext from "./Components/Jobs/jobsContext";
import JoblyApi from "./api";
import Job from "./Components/Jobs/Job";
import JobCard from "./Components/Jobs/JobCard";

function App() {
  //looks for user in localStorage, if not found, user is empty obj
  const [currUser, setCurrUser] = useState(() => {
    const user = window.localStorage.getItem("currUser");
    return user !== null ? JSON.parse(user) : {};
  });
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [applications, setApplications] = useState(() => {
    const user = window.localStorage.getItem("currUser");
    return user !== null ? JSON.parse(user).applications : [];
  });

  useEffect(() => {
    if (!token) {
      return;
    }
    window.localStorage.setItem("token", token);
    //retrieve current user based on current token and username
    //save currUser to local storage
    const getUser = async () => {
      //window.localStorage.removeItem("currUser");
      const user = await JoblyApi.getUser(username);
      setCurrUser(user);
      window.localStorage.setItem("currUser", JSON.stringify(user));
      console.log("is APP's USE EFFECT gettin called?");
    };
    getUser();
  }, [token, username]);

  const register = async (formData) => {
    const res = await JoblyApi.register(formData);
    console.log(res);
    setToken(res);
  };

  const login = async (formData) => {
    //username needs to be exposed because the effect uses it to talk to backend
    setUsername(formData.username);
    const token = await JoblyApi.login(formData);
    //once token is changed, effect is triggered that sets currUser
    setToken(token);
  };

  const logout = () => {
    setCurrUser({});
    localStorage.removeItem("currUser");
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, token, currUser, setCurrUser }}
    >
      <JobsContext.Provider value={{ applications, setApplications }}>
        <BrowserRouter>
          <Navbar />
          <Routes />
          <Footer />
        </BrowserRouter>
      </JobsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
