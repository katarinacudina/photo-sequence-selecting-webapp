const users = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateAdmin,
  updateApproved,
} = require("../../queries/users");

users.get("/", getUsers);
users.get("/:id", getUser);
users.post("/createUser", createUser);
users.delete("/:id", deleteUser);
users.put("/updateAdmin/:id", updateAdmin);
users.put("/updateApproved/:id", updateApproved);

module.exports = users;
