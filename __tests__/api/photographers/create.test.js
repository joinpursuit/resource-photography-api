const request = require("supertest");
const app = require("@root/app");
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

      const { success, errors, payload } = response.body;
      expect(success).toEqual(true);
      expect(errors).not.toBeDefined();

      expect(payload.id).toBeTruthy();
      expect(payload.unsplash_profile_url).toEqual(
        photographer.unsplash_profile_url
      );
    });

    test("should return an error if the data is incomplete", async () => {
      const photographer = {
        preferred_name: "Michael",
        surname: "Baccin",
      };

      const response = await request(app)
        .post("/api/photographers")
        .send(photographer);
      expect(response.status).toEqual(422);

      const { success, errors, payload } = response.body;
      expect(success).toEqual(false);
      expect(payload).not.toBeDefined();

      expect(errors.length).toEqual(1);
      expect(errors).toEqual(["`unsplash_profile_url` key is required."]);
    });
  });
});
