const request = require("supertest");
const app = require("@root/app");
const db = require("@db");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographs", () => {
  describe("POST", () => {
    test("should create a new photograph", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");
      const photograph = {
        direct_url:
          "https://images.unsplash.com/photo-1638389665503-c3a6abd22a9a",
        unsplash_url: "https://unsplash.com/photos/rnpgXbpkFOs",
        photographer_id: photographer.id,
      };

      const response = await request(app)
        .post("/api/photographs")
        .send(photograph);
      expect(response.status).toEqual(201);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.id).toBeTruthy();
      expect(payload.unsplash_url).toEqual(photograph.unsplash_url);
    });

    test("should return an error if the data is incomplete", async () => {
      const photograph = {
        direct_url:
          "https://images.unsplash.com/photo-1638389665503-c3a6abd22a9a",
        unsplash_url: "https://unsplash.com/photos/rnpgXbpkFOs",
      };

      const response = await request(app)
        .post("/api/photographs")
        .send(photograph);
      expect(response.status).toEqual(422);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors.length).toEqual(1);
      expect(errors).toEqual(["`photographer_id` key is required."]);
    });
  });
});
