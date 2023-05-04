import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/create")}>add portfolio</button>;
};

export default Profile;
