import request from "supertest";
import app from "../src/app";

describe("Booking API", () => {
  it("should create a booking successfully", async () => {
    const res = await request(app)
      .post("/api/bookings")
      .send({
        name: "Test User",
        email: "test@example.com",
        date: "2026-01-10",
      });

    expect(res.statusCode).toBe(201);
  });

  it("should return validation error if name is missing", async () => {
    const res = await request(app)
      .post("/api/bookings")
      .send({
        email: "test@example.com",
        date: "2026-01-10",
      });

    expect(res.statusCode).toBe(400);
  });
});
