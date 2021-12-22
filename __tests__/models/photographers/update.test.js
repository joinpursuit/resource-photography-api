const db = require("@db");
const photographerModel = require("@models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("update", () => {
    test("should update a single photographer", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");

      const surname = "Test";
      const [result] = await photographerModel.update({
        ...photographer,
        surname,
      });
      expect(result.surname).toEqual(surname);
    });
  });
});
