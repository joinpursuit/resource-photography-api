const request = require("supertest");
const app = require("../../../app");
const db = require("../../../db");
const photographerModel = require("../../../models/photographers.model");
const { closeConnection, resetDatabase } = require("../../helpers");

beforeEach(resetDatabase);
afterAll(closeConnection);

describe("/api/photographers", () => {
  describe("POST", () => {
    test("should create a new photographer", async () => {
      const photographer = {
        preferred_name: "Michael",
        surname: "Baccin",
        unsplash_profile_url: "https://unsplash.com/@michaelbaccin",
      };

      const response = await request(app)
        .post("/api/photographers")
        .send(photographer);
      expect(response.status).toEqual(201);

      const { success, payload } = response.body;
      expect(success).toEqual(true);
      expect(payload.id).toBeTruthy();
      expect(payload.unsplash_profile_url).toEqual(
        photographer.unsplash_profile_url
      );
    });
  });
});
