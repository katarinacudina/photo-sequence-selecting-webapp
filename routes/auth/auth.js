const auth = require("express").Router();
const { signUp, logIn } = require("../../queries/auth");
const withAuth = require("../../middleware");

auth.post("/signUp", signUp);
auth.get("/logIn/:email/:password", logIn);
auth.get("/verifyToken", withAuth, (req, res) => res.sendStatus(200));
auth.get("/logout");

module.exports = auth;
