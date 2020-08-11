import React from "react";
import UserTableRow from "./UserTableRow";
import Button from "../Forms/Inputs/Button";

const UserTable = ({ users, reloadUsers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>*</th>
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
      <tfoot>
        <tr>
          {/* <td>
            <Button text="Approve selected" />{" "}
            <Button text="Promote to admin" />
          </td> */}
        </tr>
      </tfoot>
    </table>
  );
};

export default UserTable;
