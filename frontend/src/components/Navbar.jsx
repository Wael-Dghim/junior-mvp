import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

const Navbar = ({ user }) => {
  return (
    <nav>
      <Link to="/home">All Posts</Link>
      <Link to={`/profile/${user.id}`}>My Posts</Link>
      <hr />
    </nav>
  );
};

export default Navbar;
