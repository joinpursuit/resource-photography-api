require("module-alias/register");
const db = require("@db");
const logger = require("@utils/devLogger");
const photographers = require("./photographers");
const photographs = require("./photographs");

async function setup() {
  await photographers.createTable();
  logger("CREATE: `photographers` table");

  await photographs.createTable();
  logger("CREATE: `photographs` table");
}

async function reset() {
  await photographs.dropTable();
  logger("DROP: `photographs` table");

  await photographers.dropTable();
  logger("DROP: `photographers` table");

  return setup();
}

module.exports = { setup, reset };

const { DB_COMMAND = null, NODE_ENV = "development" } = process.env;
if (NODE_ENV !== "test") {
  switch (DB_COMMAND) {
    case "setup":
      setup().then(() => db.$pool.end());
      break;
    case "reset":
      reset().then(() => db.$pool.end());
      break;
    default:
      throw "DB_COMMAND is not present or not valid.";
  }
}
