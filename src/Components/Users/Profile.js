import React, { useContext } from "react";
import AuthProvider from "../Auth/authContext";
import ProtectedRoute from "../Auth/ProtectedRoute";

const Profile = () => {
  const { currUser } = useContext(AuthProvider);
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
