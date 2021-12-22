const request = require("supertest");
const db = require("@db");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographs/:id", () => {
  describe("PUT", () => {
    test("should update a photograph by ID", async () => {
      const unsplash_url = "https://unsplash.com/photos/7haURdYnOxs";
      const [photograph] = await db.any("SELECT * FROM photographs");
      const response = await request(app)
        .put(`/api/photographs/${photograph.id}`)
        .send({ ...photograph, unsplash_url });
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.unsplash_url).toEqual(unsplash_url);
    });

    test("should return an error if the ID does not match", async () => {
      const unsplash_url = "https://unsplash.com/photos/7haURdYnOxs";
      const [photograph] = await db.any("SELECT * FROM photographs");
      const response = await request(app)
        .put(`/api/photographs/9999`)
        .send({ ...photograph, unsplash_url });
      expect(response.status).toEqual(404);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors).toEqual([
        `Photograph with ID of 9999 could not be found.`,
      ]);
    });

    test("should return an error if the data is incomplete", async () => {
      const [photograph] = await db.any("SELECT * FROM photographs");
      const response = await request(app)
        .put(`/api/photographs/${photograph.id}`)
        .send({
          direct_url:
            "https://images.unsplash.com/photo-1638212154116-67b9a256088d",
          unsplash_url: "https://unsplash.com/photos/7haURdYnOxs",
        });
      expect(response.status).toEqual(422);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors.length).toEqual(1);
      expect(errors).toEqual(["`photographer_id` key is required."]);
    });
  });
});
