import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";
import { Checks } from "phosphor-react";

const ProfileHeader = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-evenly items-center">
      <h3 className="mt-10 lg:mt-0 text-teal-accent-400 font-bold text-center text-6xl">
        Welcome, {currUser.username}!{" "}
      </h3>
      <p className="text-teal-accent-400 ">
        So far, you have applied to {currUser.applications.length} jobs. Way to
        go! 
        <Checks className="inline-block" size={34} />
      </p>
      <img
        className="rounded object-cover py-10 "
        src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      ></img>
    </div>
  );
};

export default ProfileHeader;
