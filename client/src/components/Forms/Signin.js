import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "./Inputs/Input";
import "./Forms.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    saveUser();
  };
  const saveUser = () => {
    axios
      .post("http://localhost:3000/auth/signUp", {
        email,
        password,
        phoneNumber,
      })
      .then((res) => {
        if (res.status === 200) props.history.push("/auth/login");
        else if (res.status === 400) alert(res.message);
      })

      .catch((err) => alert("Error signing in !"));
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={formSubmitHandler}>
        <div className="form-title">Sign up</div>

        <Input
          name="E-mail"
          value={email}
          type="email"
          setValue={setEmail}
          maxLength="50"
          placeholder="Enter e-mail"
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
          placeholder="Enter phone number"
        />

        <button className="default-button black"> Submit </button>
        <label>
          Already have an account? <Link to="/auth/login">Log in</Link>
        </label>
      </form>
    </div>
  );
};

export default Signin;
