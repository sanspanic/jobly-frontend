import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Company from "./Companies/Company";
import Companies from "./Companies/Companies";
import Jobs from "./Jobs/Jobs";
import Job from "./Jobs/Job";
import Profile from "./Users/Profile";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Home from "./Home";
import Logout from "./Auth/Logout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/jobs/:id">
        <Job />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
};

export default Routes;
