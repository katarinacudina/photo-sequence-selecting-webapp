import React from "react";
import "./Inputs.css";

const Button = ({ text, handleClick }) => {
  return (
    <button className="default-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
