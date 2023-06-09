import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/portfolioPage.css";

const Portfolio = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/portfolios/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
      });
  }, []);
  return (
    <>
      {portfolio ? (
        <div id="portfolio">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 6, delay: 0 }}
            src={portfolio.src}
            alt="image"
            width={220}
            height={220}
            id="picture"
          />
          <div id="text">
            <h2>
              {portfolio.lName} {portfolio.fName}
            </h2>
            <span>{portfolio.bio}</span>
            <hr />
            <h3>Experiences</h3>
            <ul>
              {portfolio.experiences.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <hr />
            <h3>Skills</h3>
            <ul>
              {portfolio.skills.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Portfolio;
