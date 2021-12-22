const db = require("@db");

function seedData() {
  return db.none(
    `
      INSERT INTO
          photographers (preferred_name, surname, unsplash_profile_url)
      VALUES
          (
              'Marek',
              'Piwnicki',
              'https://unsplash.com/@marekpiwnicki'
          ),
          (
              'Arpit',
              'Dhore',
              'https://unsplash.com/@arpit_dhore'
          ),
          (
              'Annie',
              'Spratt',
              'https://unsplash.com/@anniespratt'
          );
    `
  );
}

function destroyData() {
  return db.none(
    `
      DELETE FROM photographers;
    `
  );
}

module.exports = {
  seedData,
  destroyData,
};
