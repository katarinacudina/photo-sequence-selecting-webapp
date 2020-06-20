const pgp = require("pg-promise")({}); //invoking a function, takes options, passed an empty object
var db = pgp("postgres://me:password@localhost:5432/sequan_db");

module.exports = db;
