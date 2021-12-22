const db = require("@db");

function createTable() {
  return db.none(
    `
      CREATE TABLE photographers (
        id SERIAL PRIMARY KEY,
        preferred_name TEXT,
        surname TEXT,
        unsplash_profile_url TEXT
      )
    `
  );
}

function dropTable() {
  return db.none(
    `
      DROP TABLE IF EXISTS photographers;
    `
  );
}

module.exports = {
  createTable,
  dropTable,
};
