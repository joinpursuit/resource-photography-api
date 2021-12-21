const db = require("../../db");
const { reset } = require("../../db/schema");
const { seed } = require("../../db/seeds");

async function resetDatabase() {
  await reset();
  return seed();
}

function closeConnection() {
  return db.$pool.end();
}

module.exports = { closeConnection, resetDatabase };
