const db = require("@db");
const photographerModel = require("@models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("get one", () => {
    test("should retrieve a single photographer in an array", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");
      const result = await photographerModel.getOne(photographer.id);

      expect([photographer]).toEqual(result);
    });
  });
});
