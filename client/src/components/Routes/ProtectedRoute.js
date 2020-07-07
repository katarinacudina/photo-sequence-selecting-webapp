import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ component: Component }, ...rest) => {
  const isAuthenticated = async () => {
    await axios
      .get("http://localhost:3000/auth/verifyToken", { withCredentials: true })
      .then((res) => {
        console.log(res);
        /* if (res.status === 200) return true; */
      })
      .catch((err) => console.log(err));
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) return <Component {...props} />;
        else props.history.push("/auth/login");
      }}
    />
  );
};

export default ProtectedRoute;
