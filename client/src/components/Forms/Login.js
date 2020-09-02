import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "./Inputs/Input";
import "./Forms.css";
import { setUser } from "../../js/actions/index";
import { connect } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    checkUser();
  };
  const checkUser = () => {
    axios
      .post(
        `http://localhost:3000/auth/logIn`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          props.setUser({
            user_id: res.data.user_id,
            email: res.data.email,
            is_admin: res.data.is_admin,
          });

          redirectToMain();
        } else if (res.status === 400) alert(res.message);
      })
      .catch((err) => console.log(err));
  };
  const redirectToMain = () => props.history.push("/home");
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={formSubmitHandler}>
        <div className="form-title">Log in</div>
        <Input
          name="E-mail"
          value={email}
          type="email"
          setValue={setEmail}
          maxLength="50"
          placeholder="Enter email"
        />
        <Input
          name="Password"
          value={password}
          type="password"
          setValue={setPassword}
          maxLength="50"
          placeholder="Enter password"
        />

        <button className="default-button black"> Submit </button>
        <label>
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(setUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
