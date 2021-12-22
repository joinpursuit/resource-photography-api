const db = require("@db");

async function seedData() {
  const photographers = await db.any("SELECT * FROM photographers");
  const photographersByName = photographers.reduce((acc, photographer) => {
    const lowercase = photographer.preferred_name.toLowerCase();
    acc[lowercase] = photographer;
    return acc;
  }, {});

  return db.any(
    `
      INSERT INTO
          photographs (direct_url, unsplash_url, photographer_id)
      VALUES
          (
              'https://images.unsplash.com/photo-1639514922255-d5563344d579',
              'https://unsplash.com/photos/gWs2MEfba0s',
              $<marek.id>
          ), (
              'https://images.unsplash.com/photo-1639429192929-de8734be35c2', 'https://unsplash.com/photos/Bn_Hdji2ClE',
              $<marek.id>
          ), (
              'https://images.unsplash.com/photo-1639085532920-d7b97cf4bb34', 'https://unsplash.com/photos/7mswFjg8rYY',
              $<marek.id>
          ), (
              'https://images.unsplash.com/photo-1637379942364-bfa13d0924e7', 'https://unsplash.com/photos/I6iaaAihJzA',
              $<arpit.id>
          ), (
              'https://images.unsplash.com/photo-1637419000300-5f5fb8b70eea', 'https://unsplash.com/photos/LOO2igDiXuY',
              $<arpit.id>
          ), (
              'https://images.unsplash.com/photo-1639638176354-bfc5b3f00b05', 'https://unsplash.com/photos/GZ4QcZQIdi4',
              $<annie.id>
          ), (
              'https://images.unsplash.com/photo-1639218690251-b291a6e7760e', 'https://unsplash.com/photos/PhcZT6S-dwA',
              $<annie.id>
          ), (
              'https://images.unsplash.com/photo-1638012514383-62d7e922f898', 'https://unsplash.com/photos/8H9w2UWyx0E',
              $<annie.id>
          );
    `,
    photographersByName
  );
}

function destroyData() {
  return db.none(
    `
      DELETE FROM photographs;
    `
  );
}

module.exports = {
  seedData,
  destroyData,
};
