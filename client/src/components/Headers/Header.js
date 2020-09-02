import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header>
      <Link className="header-left" to="/home">
        <img src={logo} alt="logo" />
        <div className="header-title">sequan</div>
      </Link>
      <div>{props.user && `Hello, ${props.user.email}`}</div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(Header);
