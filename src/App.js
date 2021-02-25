import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";
import AuthContext from "./Components/Auth/authContext";
import JoblyApi from "./api";
import Job from "./Components/Jobs/Job";

function App() {
  const [currUser, setCurrUser] = useState(() => {
    const user = window.localStorage.getItem("currUser");
    return user !== null ? JSON.parse(user) : {};
  });
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    //set current token
    JoblyApi.token = token;

    //retrieve current user based on current token and username
    //save currUser to local storage
    const getUser = async () => {
      const user = await JoblyApi.getUser(username);
      setCurrUser(user);
      window.localStorage.setItem("currUser", JSON.stringify(user));
    };
    getUser();

    return () => {};
  }, [token]);

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
    <AuthContext.Provider value={{ register, login, logout, token, currUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
