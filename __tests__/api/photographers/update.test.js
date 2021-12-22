const request = require("supertest");
const db = require("@db");
const app = require("@root/app");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographers/:id", () => {
  describe("PUT", () => {
    test("should update a photographer by ID", async () => {
      const surname = "Test";
      const [photographer] = await db.any("SELECT * FROM photographers");
      const response = await request(app)
        .put(`/api/photographers/${photographer.id}`)
        .send({ ...photographer, surname });
      expect(response.status).toEqual(200);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.surname).toEqual(surname);
    });

    test("should return an error if the ID does not match", async () => {
      const surname = "Test";
      const [photographer] = await db.any("SELECT * FROM photographers");
      const response = await request(app)
        .put(`/api/photographers/9999`)
        .send({ ...photographer, surname });
      expect(response.status).toEqual(404);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors).toEqual([
        `Photographer with ID of 9999 could not be found.`,
      ]);
    });

    test("should return an error if the data is incomplete", async () => {
      const [photographer] = await db.any("SELECT * FROM photographers");
      const response = await request(app)
        .put(`/api/photographers/${photographer.id}`)
        .send({ preferred_name: "Test", surname: "Test" });
      expect(response.status).toEqual(422);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors.length).toEqual(1);
      expect(errors).toEqual(["`unsplash_profile_url` key is required."]);
    });
  });
});
