const db = require("@db");
const photographModel = require("@models/photographs.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("update", () => {
    test("should update a single photograph", async () => {
      const [photograph] = await db.any("SELECT * FROM photographs");

      const unsplash_url = "https://unsplash.com/photos/7haURdYnOxs";
      const [result] = await photographModel.update({
        ...photograph,
        unsplash_url,
      });
      expect(result.unsplash_url).toEqual(unsplash_url);
    });
  });
});
