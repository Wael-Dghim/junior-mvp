import React from "react";
import "../styles/portfolio.css";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Portfolio = ({ portfolio }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="nft"
      onClick={() => navigate(`/portfolio/${portfolio._id}`)}
    >
      <div className="main">
        <img className="tokenImage" src={portfolio.src} alt="NFT" />
        <h2 className="name">
          {portfolio.fName} {portfolio.lName}
        </h2>
        <p className="description">{portfolio.bio}</p>
      </div>
    </motion.div>
  );
};

export default Portfolio;
