import app from "../src/index.js";
import supertest from "supertest";

import prisma from "../src/config/database.js";

beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;
});

describe("POST/ User authentication test", () => {
    const body = {
        email: 'test_email@gmail.com',
        password: "123456",
        confirmPassword: "123456"
    };

    it('Sign Up Test', async () => {
        const result = await supertest(app).post("/signup").send(body);
        expect(result.status).toEqual(201);
    });

    it('Try Sign Up again with same e-mail test (unique email)', async () => {
        const result = await supertest(app).post("/signup").send(body);
        expect(result.status).toEqual(409);
    });
});

describe("POST/ User authentication test", () => {
    const body = {
        email: 'test_email@gmail.com',
        password: "123456"
    };

    it('Sign In Test', async () => {
        const result = await supertest(app).post("/signin").send(body);
        expect(result.status).toEqual(200);
    });
});

afterAll(async () => {
    await prisma.$disconnect()
});