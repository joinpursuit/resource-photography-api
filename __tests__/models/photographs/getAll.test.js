const db = require("@db");
const photographModel = require("@models/photographs.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographs model", () => {
  describe("get all", () => {
    test("should retrieve all photographs", async () => {
      const expected = await db.any("SELECT * FROM photographs");
      expect(expected.length).toEqual(8);

      const result = await photographModel.getAll();

      expect(expected).toEqual(result);
    });
  });
});
