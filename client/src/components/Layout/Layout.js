import React from "react";
import AdminView from "../Administrator/AdminView";

const Layout = () => {
  const fetchMe = () => {
    fetch(`http://localhost:3000/auth/verifyToken`, { credentials: "include" })
      .then((res) => {
        if (res.status === 200) {
          console.log("200");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log("not 200");
        console.error(err);
      });
  };
  return (
    <div>
      <button onClick={fetchMe}>click me</button>
      <AdminView />
    </div>
  );
};

export default Layout;
