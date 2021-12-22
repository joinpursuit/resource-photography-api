const request = require("supertest");
const db = require("@db");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographers/:id", () => {
  describe("GET", () => {
    test("should get a photographer by ID", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");

      const response = await request(app).get(
        `/api/photographers/${photographer.id}`
      );
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload).toEqual(photographer);
    });

    test("should return an error if the ID does not match", async () => {
      const response = await request(app).get(`/api/photographers/9999`);
      expect(response.status).toEqual(404);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors).toEqual([
        `Photographer with ID of 9999 could not be found.`,
      ]);
    });
  });
});
