const request = require("supertest");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographers", () => {
  describe("GET", () => {
    test("should get all photographers", async () => {
      const response = await request(app).get("/api/photographers");
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.length).toEqual(3);

      const photographer = payload[0];
      expect(photographer.preferred_name).toBeTruthy();
      expect(photographer.surname).toBeTruthy();
      expect(photographer.unsplash_profile_url).toBeTruthy();
    });
  });
});
