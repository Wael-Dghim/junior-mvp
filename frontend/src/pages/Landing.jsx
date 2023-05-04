import React, { useEffect, useState } from "react";
import Portfolio from "../components/Portfolio";

const Landing = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.API_URL}/portfolios/`)
      .then((res) => res.json())
      .then((data) => setPortfolios(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {portfolios.map((e, i) => (
        <Portfolio key={i} portfolio={e} />
      ))}
    </div>
  );
};

export default Landing;
