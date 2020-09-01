import React, { useState } from "react";
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
      .get(`http://localhost:3000/auth/logIn/${email}/${password}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          props.setUser({
            user_id: res.data.user_id,
            email: res.data.email,
            is_admin: res.data.is_admin,
          });
          redirectToMain();
        }
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

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(setUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
