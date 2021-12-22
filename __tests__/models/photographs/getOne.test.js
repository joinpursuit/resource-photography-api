const db = require("@db");
const photographModel = require("@models/photographs.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("get one", () => {
    test("should retrieve a single photograph in an array", async () => {
      const [photograph] = await db.any("SELECT * FROM photographs");
      const result = await photographModel.getOne(photograph.id);

      expect([photograph]).toEqual(result);
    });
  });
});
