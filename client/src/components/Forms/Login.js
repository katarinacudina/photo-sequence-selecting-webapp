import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "./Inputs/Input";
import "./Forms.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    checkUser();
  };
  const checkUser = () => {
    axios
      .get(`http://localhost:3000/auth/logIn/${email}/${password}`, {
        withCredentials: true,
      })
      .then((res) => {
        res.status === 200 && redirectToMain();
      })
      .catch((err) => console.log(err));
  };
  const redirectToMain = () => props.history.push("/home");
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={formSubmitHandler}>
        <h2>Log In</h2>
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

        <button className="default-button"> Submit </button>
        <label>
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </label>
      </form>
    </div>
  );
};

export default Login;
