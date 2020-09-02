import React, { useState } from "react";
import "./Inputs.css";

const Input = ({ name, type, value, setValue, maxLength, placeholder }) => {
  const [isValueValid, setIsValueValid] = useState(true);
  const checkValidity = (type, value) => {
    if (type === "email") {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      re.test(String(value).toLowerCase())
        ? setIsValueValid(true)
        : setIsValueValid(false);
    }
  };
  return (
    <div className="signin-container__row">
      <label className="input-label">{name}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
        onBlur={(e) => checkValidity(type, e.target.value)}
      />
      {!isValueValid && (
        <label className="input-warning-label">{name} is not valid.</label>
      )}
    </div>
  );
};

export default Input;
