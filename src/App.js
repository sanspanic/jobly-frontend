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
  const [currUser, setCurrUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const getCurrentUser = async (token) => {
      /*       const res = await JoblyApi.getUser(token);
      console.log(res);
      setCurrUser(res); */
    };
    getCurrentUser(token);
    return () => {};
  }, [token]);

  const register = async (formData) => {
    const res = await JoblyApi.register(formData);
    console.log(res);
    setToken(res);
  };

  const login = async (formData) => {
    const token = await JoblyApi.login(formData);
    console.log(token);
    setToken(token);
    const user = await JoblyApi.getUser(formData.username);
    console.log(user);
    setCurrUser(user);
  };

  const logout = () => {
    setCurrUser({});
    setToken("");
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
