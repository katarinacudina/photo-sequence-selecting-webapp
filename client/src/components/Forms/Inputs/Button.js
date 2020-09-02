import React from "react";
import "./Inputs.css";

const Button = ({ text, handleClick, color }) => {
  return (
    <button className={`default-button ${color}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
