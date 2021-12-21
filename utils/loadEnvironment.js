const path = require("path");
const environment = process.env.NODE_ENV || "development";
const envPath = path.join(__dirname, "..", `.env.${environment}`);

const envs = require("dotenv").config({ path: envPath });
require("dotenv-expand")(envs);
