const db = require("../");
const photographers = require("./photographers");
const photographs = require("./photographs");

async function setup() {
  await photographers.createTable();
  return photographs.createTable();
}

async function reset() {
  await photographs.dropTable();
  await photographers.dropTable();
  return setup();
}

const { DB_COMMAND = null } = process.env;

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
