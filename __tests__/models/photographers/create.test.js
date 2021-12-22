const db = require("@db");
const photographerModel = require("@models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("create", () => {
    test("should create a new photographer", async () => {
      const beforeCreate = await db.any("SELECT * FROM photographers");
      expect(beforeCreate.length).toEqual(3);

      const photographer = {
        preferred_name: "Michael",
        surname: "Baccin",
        unsplash_profile_url: "https://unsplash.com/@michaelbaccin",
      };

      await photographerModel.create(photographer);

      const afterCreate = await db.any("SELECT * FROM photographers");
      expect(afterCreate.length).toEqual(4);

      const createdPhotographer = afterCreate[3];
      expect(createdPhotographer.id).toBeTruthy();
      expect(createdPhotographer.unsplash_profile_url).toEqual(
        photographer.unsplash_profile_url
      );
    });
  });
});
