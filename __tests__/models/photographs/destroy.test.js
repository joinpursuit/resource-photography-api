const db = require("@db");
const photographModel = require("@models/photographs.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographs model", () => {
  describe("destroy", () => {
    test("should destroy a single photograph", async () => {
      const preDestroy = await db.any("SELECT * FROM photographs");
      expect(preDestroy.length).toEqual(8);

      const [photograph] = preDestroy;
      const result = await photographModel.destroy(photograph.id);
      expect([photograph]).toEqual(result);

      const postDestroy = await db.any("SELECT * FROM photographs");
      expect(postDestroy.length).toEqual(7);
    });

    test("should do nothing when an incorrect ID is added", async () => {
      const preDestroy = await db.any("SELECT * FROM photographs");
      expect(preDestroy.length).toEqual(8);

      await photographModel.destroy(9999);

      const postDestroy = await db.any("SELECT * FROM photographs");
      expect(postDestroy.length).toEqual(8);
    });
  });
});
