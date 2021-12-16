const db = require("../db/config");

async function create({ preferred_name, surname, unsplash_profile_url }) {
  try {
    return await db.one(
      `
      INSERT INTO
        photographers (preferred_name, surname, unsplash_profile_url)
      VALUES
        ($1, $2, $3)
      RETURNING *
    `,
      [preferred_name, surname, unsplash_profile_url]
    );
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

module.exports = { create };
