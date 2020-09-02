import React from "react";
import UserTableRow from "./UserTableRow";

const UserTable = ({ users, reloadUsers }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>E-mail</th>
          <th>Phone Number</th>
          <th>Is Approved</th>
          <th>Is Admin</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserTableRow user={user} key={index} reloadUsers={reloadUsers} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
