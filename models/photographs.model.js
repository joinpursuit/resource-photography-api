const db = require("@db");

async function getAll() {
  try {
    return await db.any(`SELECT * FROM photographs`);
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

async function getOne(id) {
  try {
    return await db.any(`SELECT * FROM photographs WHERE id=$1`, [id]);
  } catch (error) {
    console.error(error);
    throw "Internal server error.";
  }
}

async function create({ direct_url, unsplash_url, photographer_id }) {
  try {
    return await db.one(
      `
      INSERT INTO
        photographs (direct_url, unsplash_url, photographer_id)
      VALUES
        ($1, $2, $3)
      RETURNING *
    `,
      [direct_url, unsplash_url, photographer_id]
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
        photographs
      SET
        direct_url=$<direct_url>,
        unsplash_url=$<unsplash_url>,
        photographer_id=$<photographer_id>
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
        photographs
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
