import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <Link className="header-left" to="/home">
        <img src={logo} alt="logo" />
        <div className="header-title">sequan</div>
      </Link>
    </header>
  );
};

export default Header;
