const db = require("@db");
const photographModel = require("@models/photographs.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographs model", () => {
  describe("create", () => {
    test("should create a new photograph", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");
      const beforeCreate = await db.any("SELECT * FROM photographs");
      expect(beforeCreate.length).toEqual(8);

      const photograph = {
        direct_url:
          "https://images.unsplash.com/photo-1638389665503-c3a6abd22a9a",
        unsplash_url: "https://unsplash.com/photos/rnpgXbpkFOs",
        photographer_id: photographer.id,
      };

      await photographModel.create(photograph);

      const afterCreate = await db.any("SELECT * FROM photographs");
      expect(afterCreate.length).toEqual(9);

      const createdPhotograph = afterCreate[8];
      expect(createdPhotograph.id).toBeTruthy();
      expect(createdPhotograph.unsplash_url).toEqual(photograph.unsplash_url);
    });
  });
});
