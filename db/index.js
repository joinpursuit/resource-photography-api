require("@utils/loadEnvironment");
const pgp = require("pg-promise")();
const db = pgp({ connectionString: process.env.PG_DATABASE_URL });

module.exports = db;
