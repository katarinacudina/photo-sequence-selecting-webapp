import React from "react";
import "./Headers.css";
import logo from "./fesb_logo.png";

const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        href="https://www.fesb.unist.hr/"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="fesb-logo.png" />
      </a>
    </footer>
  );
};

export default Footer;
