import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/home">All Posts</Link>
        <Link to="/">My Posts</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
