const dotenv = require("dotenv");
const app = require("./app");
const db = require("./db");

dotenv.config();
const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}.`);
  try {
    await db.connect();
    console.log(`Database connection successful.`);
  } catch (error) {
    console.error(`Database connection failed!`);
    console.error(error);
  }
});
