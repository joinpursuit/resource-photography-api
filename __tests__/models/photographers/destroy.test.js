const db = require("@db");
const photographerModel = require("@models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("Photographers model", () => {
  describe("destroy", () => {
    test("should destroy a single photographer", async () => {
      const preDestroy = await db.any("SELECT * FROM photographers");
      expect(preDestroy.length).toEqual(3);

      const [photographer] = preDestroy;
      const result = await photographerModel.destroy(photographer.id);
      expect([photographer]).toEqual(result);

      const postDestroy = await db.any("SELECT * FROM photographers");
      expect(postDestroy.length).toEqual(2);
    });

    test("should do nothing when an incorrect ID is added", async () => {
      const preDestroy = await db.any("SELECT * FROM photographers");
      expect(preDestroy.length).toEqual(3);

      await photographerModel.destroy(9999);

      const postDestroy = await db.any("SELECT * FROM photographers");
      expect(postDestroy.length).toEqual(3);
    });
  });
});
