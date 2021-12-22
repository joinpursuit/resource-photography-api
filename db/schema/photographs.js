const db = require("@db");

function createTable() {
  return db.none(
    `
      CREATE TABLE photographs (
        id SERIAL PRIMARY KEY,
        direct_url TEXT,
        unsplash_url TEXT,
        photographer_id INTEGER REFERENCES photographers ON
          DELETE CASCADE
      );
    `
  );
}

function dropTable() {
  return db.none(
    `
      DROP TABLE IF EXISTS photographs;
    `
  );
}

module.exports = {
  createTable,
  dropTable,
};
