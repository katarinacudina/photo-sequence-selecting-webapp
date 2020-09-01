import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";

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
    <div>
      <UserTable users={users} reloadUsers={reloadUsers} />
    </div>
  );
};

export default ManageAccounts;
