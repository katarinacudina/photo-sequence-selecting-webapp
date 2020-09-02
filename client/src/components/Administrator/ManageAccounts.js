import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import "./AdminView.css";
import { Link } from "react-router-dom";

const ManageAccounts = () => {
  useEffect(() => {
    getUsers();
  }, []);
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  };
  const reloadUsers = () => getUsers();
  return (
    <div className="manage-accounts">
      <div className="title">Manage accounts</div>
      <UserTable users={users} reloadUsers={reloadUsers} />
      <Link to="/home">Back to homepage</Link>
    </div>
  );
};

export default ManageAccounts;
