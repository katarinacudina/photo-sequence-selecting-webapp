import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "./Inputs/Input";
import "./Forms.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    saveUser();
  };
  const saveUser = () => {
    axios
      .post("http://localhost:3000/users/createUser", {
        email,
        password,
        phoneNumber,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={formSubmitHandler}>
        <h2>Sign up</h2>
        <Input
          name="E-mail"
          value={email}
          setValue={setEmail}
          maxLength="50"
          placeholder="person@example.com"
        />
        <Input
          name="Password"
          value={password}
          setValue={setPassword}
          maxLength="50"
          placeholder="Enter password"
        />
        <Input
          name="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          maxLength="20"
          placeholder="eg. +385931236455"
        />

        <button className="default-button"> Submit </button>
        <label>
          Already a member? <Link to="/auth/login">Log in</Link>
        </label>
      </form>
    </div>
  );
};

export default Signin;
