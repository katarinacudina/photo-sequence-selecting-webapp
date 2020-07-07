const db = require("../db/index");
const {
  hashPassword,
  comparePassword,
  generateJWToken,
} = require("./authHelper");

//////////SIGN UP/////////////////
const signUp = async (req, res, next) => {
  try {
    //check if email and password are > 0
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "Some values are missing" });
    }
    //check if user with that email exists
    let userExists = await db.any(
      "SELECT EXISTS(SELECT 1 FROM account WHERE email=$1);",
      req.body.email
    );

    if (userExists.exists)
      return res
        .status(400)
        .send({ message: "Account with this email already exists" });
    //hash the password
    const hashedPassword = hashPassword(req.body.password);

    //create the user
    await db.none(
      "INSERT INTO account (email, password, phone_number) VALUES ($1, $2, $3);",
      [req.body.email, hashedPassword, req.body.phoneNumber]
    );
    //send response
    res.status(200).json({ message: "New user created" });
  } catch (err) {
    next(err);
  }
};

///////////////////////////////
//////////////LOGIN//////////////////////////
////////////////////////////////////////

const logIn = async (req, res, next) => {
  try {
    //find user in database
    let user = await db.one(
      "SELECT * FROM account WHERE email = ${email};",
      req.params
    );
    //check if hashpassword is same as sent password
    const passwordsMatch = comparePassword(user.password, req.params.password);
    //send status 200
    if (!passwordsMatch)
      res.status(400).json({ message: "Password incorrect." });
    //generate token
    const token = generateJWToken(user.user_id);
    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signUp,
  logIn,
};
