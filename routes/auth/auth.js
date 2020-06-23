const auth = require("express").Router();
const { signUp, logIn } = require("../../queries/auth");

auth.post("/signUp", signUp);
auth.get("/logIn/:email/:password", logIn);
auth.get("/verifyToken");

module.exports = auth;
