const request = require("supertest");
const db = require("@db");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographs/:id", () => {
  describe("GET", () => {
    test("should get a photograph by ID", async () => {
      const [photograph] = await db.any("SELECT * FROM photographs");

      const response = await request(app).get(
        `/api/photographs/${photograph.id}`
      );
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload).toEqual(photograph);
    });

    test("should return an error if the ID does not match", async () => {
      const response = await request(app).get(`/api/photographs/9999`);
      expect(response.status).toEqual(404);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors).toEqual([
        `Photograph with ID of 9999 could not be found.`,
      ]);
    });
  });
});
