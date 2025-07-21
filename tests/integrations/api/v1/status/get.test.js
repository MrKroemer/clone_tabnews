test("GET to response 200 with status message", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data).toEqual({
    status: "ok",
    message: "API is running smoothly",
    timestamp: expect.any(String),
  });
});
//import fetch from "node-fetch";
//import { describe, test, expect } from "@jest/globals";
