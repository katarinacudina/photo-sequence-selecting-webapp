import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ component: Component }, ...rest) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => isAuthenticated(), []);
  const isAuthenticated = () => {
    axios
      .get("http://localhost:3000/auth/verifyToken", { withCredentials: true })
      .then((res) => {
        if (res.status === 200);
        else {
          setRedirect(true);
        }
      })
      .catch((err) => {
        setRedirect(true);
      });
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!redirect) return <Component {...props} />;
        else props.history.push("/auth/login");
      }}
    />
  );
};

export default ProtectedRoute;
