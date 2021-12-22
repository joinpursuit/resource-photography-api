const db = require("@db");
const photographerModel = require("@models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("get all", () => {
    test("should retrieve all photographers", async () => {
      const expected = await db.any("SELECT * FROM photographers");
      expect(expected.length).toEqual(3);

      const result = await photographerModel.getAll();

      expect(expected).toEqual(result);
    });
  });
});
