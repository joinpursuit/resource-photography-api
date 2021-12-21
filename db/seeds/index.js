const db = require("../");

const photographers = require("./photographers");
const photographs = require("./photographs");

async function seed() {
  await photographers.seedData();
  return photographs.seedData();
}

async function reseed() {
  await photographs.destroyData();
  await photographers.destroyData();
  return seed();
}

const { DB_COMMAND = null } = process.env;

switch (DB_COMMAND) {
  case "seed":
    seed().then(() => db.$pool.end());
    break;
  case "reseed":
    reseed().then(() => db.$pool.end());
    break;
  default:
    throw "DB_COMMAND is not present or not valid.";
}
