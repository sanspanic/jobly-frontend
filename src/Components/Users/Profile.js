import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";
import ProtectedRoute from "../Auth/ProtectedRoute";

const Profile = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <>
      {currUser.username ? (
        <div>This will be a user's profile</div>
      ) : (
        <ProtectedRoute />
      )}
    </>
  );
};

export default Profile;
