import React from "react";
import "./Inputs.css";

const Input = ({ name, type, value, setValue, maxLength, placeholder }) => {
  return (
    <div className="signin-container__row">
      <label>{name}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
