const db = require("../db/index");

const getUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM account ORDER BY email ASC;");
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
    const user = await db.one(
      "INSERT INTO account (password, email, phone_number) VALUES ( ${password}, ${email}, ${phoneNumber}) RETURNING *",
      req.body
    );
    res
      .status(200)
      .json({ user, message: "New user created", status: "success" });
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    let user = await db.result(
      "DELETE FROM account WHERE user_id = $1",
      req.params.id
    );
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
//UPDATE ADMIN
const updateAdmin = async (req, res, next) => {
  try {
    const user = await db.result(
      "UPDATE account SET is_admin = $1 WHERE user_id = $2",
      [req.body.isAdmin, req.params.id]
    );
    res.status(200).json({ user, message: "User updated", status: "success" });
  } catch (err) {
    next(err);
  }
};
//APPROVE ACCOUNT
const updateApproved = async (req, res, next) => {
  try {
    const user = await db.result(
      "UPDATE account SET is_approved = $1 WHERE user_id = $2",
      [req.body.isApproved, req.params.id]
    );
    res.status(200).json({ user, message: "User updated", status: "success" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateAdmin,
  updateApproved,
};
