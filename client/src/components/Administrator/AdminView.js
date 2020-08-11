import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";

const AdminView = () => {
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

export default AdminView;
