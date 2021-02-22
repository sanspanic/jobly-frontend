import React from "react";
import { Switch, Route } from "react-router-dom";
import Company from "./Companies/Company";
import Companies from "./Companies/Companies";
import Jobs from "./Jobs/Jobs";
import Job from "./Jobs/Job";
import Profile from "./Users/Profile";
import Home from "./Home";

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
    </Switch>
  );
};

export default Routes;