import React from "react";
import Button from "../Forms/Inputs/Button";
import axios from "axios";

const UserTableRow = ({ user, reloadUsers }) => {
  const deleteUser = () => {
    if (window.confirm("Are you sure you want to delete this user?"))
      axios
        .delete(`http://localhost:3000/users/${user.user_id}`)
        .then((res) => reloadUsers())
        .catch((err) => console.log(err));
  };
  const updateAdmin = (isAdmin) => {
    axios
      .put(`http://localhost:3000/users/updateAdmin/${user.user_id}`, {
        isAdmin,
      })
      .then((res) => reloadUsers())
      .catch((err) => console.log(err));
  };
  const updateApproved = (isApproved) => {
    axios
      .put(`http://localhost:3000/users/updateApproved/${user.user_id}`, {
        isApproved,
      })
      .then((res) => reloadUsers())
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{user.email}</td>
      <td>{user.phone_number}</td>
      <td>
        {user.is_approved ? (
          "YES"
        ) : (
          <Button
            text="Approve"
            handleClick={() => updateApproved(!user.is_approved)}
          />
        )}
      </td>
      <td>
        {user.is_admin ? (
          <Button
            text="Remove"
            handleClick={() => updateAdmin(!user.is_admin)}
          />
        ) : (
          <Button
            text="Make Admin"
            handleClick={() => updateAdmin(!user.is_admin)}
          />
        )}
      </td>
      <td>
        <Button text="Delete" handleClick={deleteUser} />
      </td>
    </tr>
  );
};

export default UserTableRow;
