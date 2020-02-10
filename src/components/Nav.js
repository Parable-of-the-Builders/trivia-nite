import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
