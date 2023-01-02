import request from "supertest";

import app from "../../src/app";

describe("Test app.ts", () => {
    test("index route", async () => {
        const res = await request(app).get("/");
        console.log({ res })
        expect(res.body).toEqual({ message: "Hello World" });
    });
});