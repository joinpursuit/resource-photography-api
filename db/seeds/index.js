require("module-alias/register");
const db = require("@db");
const logger = require("@utils/devLogger");
const photographers = require("./photographers");
const photographs = require("./photographs");

async function seed() {
  await photographers.seedData();
  logger("SEED: `photographers` data");

  await photographs.seedData();
  logger("SEED: `photographs` data");
}

async function reseed() {
  await photographs.destroyData();
  logger("DESTROY: `photographs` data");

  await photographers.destroyData();
  logger("DESTROY: `photographers` data");

  return seed();
}

module.exports = { seed, reseed };

const { DB_COMMAND = null, NODE_ENV = "development" } = process.env;
if (NODE_ENV !== "test") {
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
}
