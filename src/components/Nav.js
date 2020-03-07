import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";
import axios from "axios";

const Nav = () => {
  async function getRes() {
    const result = await axios.get(
      `https://e4de2dea-abc7-48f5-bd0a-f8f9919e0ace.mock.pstmn.io/?method=country_code`
    );
    console.log(result.data);
  }
  return (
    <nav className="nav-wrapper">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/standard-view">
        Free Play
      </Link>
      <button onClick={() => getRes()}>Click me!</button>
    </nav>
  );
};
export default Nav;
