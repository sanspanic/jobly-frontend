import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="font-mono">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/companies">Companies</Link>
      </li>
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Navbar;
