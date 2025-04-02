import request from "supertest";
import app from "../src/server";

describe("GET /", () => {
  it("should return 200 and correct text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("✅ test");
  });
});
