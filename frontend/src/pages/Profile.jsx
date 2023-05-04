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
  return (
    <>
      {userPortfolios.map((e, i) => (
        <div key={i}>
          <Portfolio portfolio={e} />
          <button>Update</button>
          <button>Delete</button>
        </div>
      ))}
      <button onClick={() => navigate("/create")}>add portfolio</button>
    </>
  );
};

export default Profile;
