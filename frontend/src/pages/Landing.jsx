import React, { useEffect, useState } from "react";
import Portfolio from "../components/Portfolio";

import "../styles/main.css";

const Landing = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/portfolios/`)
      .then((res) => res.json())
      .then((data) => setPortfolios(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="container">
      {portfolios.map((e, i) => (
        <Portfolio key={i} portfolio={e} />
      ))}
    </div>
  );
};

export default Landing;
