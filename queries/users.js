const db = require("../db/index");

const getUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM account;");
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};
const getUser = async (req, res, next) => {
  try {
    let user = await db.one(
      "SELECT * FROM account WHERE user_id = $1;",
      req.params.id
    );
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
const createUser = async (req, res, next) => {
  try {
    await db.one(
      "INSERT INTO account (username, password, email, phone_number, role) VALUES (${username)}, ${password}, ${email}, ${phone_number}, ${role}) RETURNING *",
      req.body
    );
    res.status(200).json({ message: "New user created", status: "success" });
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    let user = await db.one(
      "DELETE FROM account WHERE user_id = $1 RETURNING *;",
      req.params.id
    );
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};
