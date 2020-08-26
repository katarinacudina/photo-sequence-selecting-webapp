const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
const comparePassword = async (hashPassword, password) => {
  return await bcrypt.compareSync(password, hashPassword);
};
const generateJWToken = (userId) => {
  secret = "Moja zvijezda sjajna";
  return jwt.sign({ userId }, secret, { expiresIn: "1 day" });
};

module.exports = {
  hashPassword,
  comparePassword,
  generateJWToken,
};
