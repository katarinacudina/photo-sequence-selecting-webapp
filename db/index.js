const pgp = require("pg-promise")({});
var db = pgp("postgres://me:password@localhost:5432/sequan_db");

module.exports = db;
