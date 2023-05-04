import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";

const Profile = ({ user }) => {
  const [userPortfolios, setUserPortfolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/portfolios/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setUserPortfolios(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/portfolios/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/home");
  };
  return (
    <>
      {userPortfolios.map((e, i) => (
        <div key={i}>
          <Portfolio portfolio={e} />
          <button onClick={() => navigate(`/update/${e._id}`)}>Update</button>
          <button onClick={() => handleDelete(e._id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => navigate("/create")}>add portfolio</button>
    </>
  );
};

export default Profile;
