import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/standard-view">
        Free Play
      </Link>
    </nav>
  );
};
export default Nav;
