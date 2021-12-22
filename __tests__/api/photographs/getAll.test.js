const request = require("supertest");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographs", () => {
  describe("GET", () => {
    test("should get all photographs", async () => {
      const response = await request(app).get("/api/photographs");
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.length).toEqual(8);

      const photographer = payload[0];
      expect(photographer.direct_url).toBeTruthy();
      expect(photographer.unsplash_url).toBeTruthy();
      expect(photographer.photographer_id).toBeTruthy();
    });
  });
});
