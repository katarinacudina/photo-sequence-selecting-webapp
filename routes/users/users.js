const users = require("express").Router();
const { getUsers, getUser } = require("../../queries/users");

users.get("/", getUsers);
users.get("/:id", getUser);
users.post("/", createUser);
users.delete("/:id");
//create user
//delete user

module.exports = users;
