import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";
import AuthContext from "./Components/Auth/authContext";
import JobsContext from "./Components/Jobs/jobsContext";
import JoblyApi from "./api";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSpinner, faCheckSquare, faCoffee);

function App() {
  const history = useHistory();
  //looks for user in localStorage, if not found, user is empty obj
  const [currUser, setCurrUser] = useState(() => {
    const user = window.localStorage.getItem("currUser");
    return user !== null ? JSON.parse(user) : {};
  });
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [applications, setApplications] = useState(() => {
    //needs to make the API call here instead
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
      setApplications(user.applications);
    };
    getUser();
  }, [token, username]);

  //applications get changed when user clicks on "apply" button in JobCard component
  useEffect(() => {
    const saveApps = async () => {
      try {
        const user = await JoblyApi.getUser(currUser.username);
        console.log(
          "THIS IS THE USER I GOT, HE SHOULD HAVE CURRENT APPLICation",
          user
        );
        window.localStorage.removeItem("currUser");
        window.localStorage.setItem("currUser", JSON.stringify(user));
      } catch (e) {
        console.log("API call went wrong");
      }
    };

    saveApps();
  }, [applications]);

  const register = async (formData) => {
    const res = await JoblyApi.register(formData);
    setToken(res);
  };

  const login = async (formData) => {
    console.log("logging in");
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
