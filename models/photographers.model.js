const db = require("@db");

async function getAll() {
  try {
    return await db.any(`SELECT * FROM photographers`);
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

async function getOne(id) {
  try {
    return await db.any(`SELECT * FROM photographers WHERE id=$1`, [id]);
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

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

async function update(photographer) {
  try {
    return await db.any(
      `
      UPDATE
        photographers
      SET
        preferred_name=$<preferred_name>,
        surname=$<surname>,
        unsplash_profile_url=$<unsplash_profile_url>
      WHERE
        id=$<id>
      RETURNING *
    `,
      photographer
    );
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

async function destroy(id) {
  try {
    return await db.any(
      `
      DELETE FROM 
        photographers
      WHERE
        id=$1
      RETURNING *
    `,
      id
    );
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
};
