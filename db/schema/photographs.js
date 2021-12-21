const db = require("../");

function createTable() {
  return db
    .none(
      `
        CREATE TABLE photographs (
          id SERIAL PRIMARY KEY,
          direct_url TEXT,
          unsplash_url TEXT,
          photographer_id INTEGER REFERENCES photographers ON
            DELETE CASCADE
        );
      `
    )
    .then(() => {
      console.log("CREATE: `photographs` table");
    });
}

function dropTable() {
  return db
    .none(
      `
        DROP TABLE IF EXISTS photographs;
      `
    )
    .then(() => {
      console.log("DROP: `photographs` table");
    });
}

module.exports = {
  createTable,
  dropTable,
};
