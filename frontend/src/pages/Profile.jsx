import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import { motion } from "framer-motion";

import "../styles/profile.css";

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
    <div>
      {userPortfolios.map((e, i) => (
        <div className="profile" key={i}>
          <Portfolio portfolio={e} />
          <div className="buttons">
            <motion.button
              onClick={() => navigate(`/update/${e._id}`)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              Update
            </motion.button>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => handleDelete(e._id)}
            >
              Delete
            </motion.button>
          </div>
        </div>
      ))}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.3 }}
        onClick={() => navigate("/create")}
      >
        Create portfolio
      </motion.button>
    </div>
  );
};

export default Profile;
