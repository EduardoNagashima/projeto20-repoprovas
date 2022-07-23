import app from "../src/index.js";
import supertest from "supertest";

import prisma from "../src/config/database.js";

beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;
});

describe("POST/ User authentication test", () => {
    const body = {
        email: 'eduyudji4@gmail.com',
        password: "123",
        confirmPassword: "123"
    };

    it('Sign Up Test', async () => {
        const result = await supertest(app).post("/signup").send(body);
        expect(result.status).toEqual(201);
    });

    it('Sign Up Fail Test (email unique)', async () => {
        const result = await supertest(app).post("/signup").send(body);
        expect(result.status).toEqual(409);
    });
});

describe("POST/ User authentication test", () => {
    const body = {
        email: 'eduyudji4@gmail.com',
        password: "123"
    };

    it('Sign In Test', async () => {
        const result = await supertest(app).post("/signin").send(body);
        expect(result.status).toEqual(200);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});