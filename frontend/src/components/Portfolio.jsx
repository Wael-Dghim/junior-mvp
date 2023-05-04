import React from "react";
import "../styles/portfolio.css";
import { useNavigate } from "react-router-dom";

const Portfolio = ({ portfolio }) => {
  const navigate = useNavigate();
  return (
    <div
      className="nft"
      onClick={() => navigate(`/portfolio/${portfolio._id}`)}
    >
      <div className="main">
        <img
          className="tokenImage"
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <h2>
          {portfolio.fName} {portfolio.lName}
        </h2>
        <p className="description">{portfolio.bio}</p>
      </div>
    </div>
  );
};

export default Portfolio;
