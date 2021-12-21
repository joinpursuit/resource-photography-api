const db = require("../");

function createTable() {
  return db
    .none(
      `
        CREATE TABLE photographers (
          id SERIAL PRIMARY KEY,
          preferred_name TEXT,
          surname TEXT,
          unsplash_profile_url TEXT
        )
      `
    )
    .then(() => {
      console.log("CREATE: `photographers` table");
    });
}

function dropTable() {
  return db
    .none(
      `
        DROP TABLE IF EXISTS photographers;
      `
    )
    .then(() => {
      console.log("DROP: `photographers` table");
    });
}

module.exports = {
  createTable,
  dropTable,
};
