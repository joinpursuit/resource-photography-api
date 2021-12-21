const db = require("../");

function seedData() {
  return db
    .none(
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
    )
    .then(() => {
      console.log("CREATE: `photographers` seed data");
    });
}

function destroyData() {
  return db
    .none(
      `
        DELETE FROM photographers;
      `
    )
    .then(() => {
      console.log("DESTROY: `photographers` rows");
    });
}

module.exports = {
  seedData,
  destroyData,
};
