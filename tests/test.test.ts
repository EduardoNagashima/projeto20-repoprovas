import app from "../src/index.js";
import supertest from "supertest";

import prisma from "../src/config/database.js";

// beforeAll(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE users;`;
// });

// describe("POST/ create new ", () => {
//     const headers = {
//         Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1ODQxMTA0NiwiZXhwIjoxNjYxMDAzMDQ2fQ.RoEliPzgK8VNNka1eGwa-yyaBmCLfLa_lESohsJE6u8"
//     };

//     it('Create new test', async () => {
//         const result = await supertest(app).post("/signup").send(headers);
//         expect(result.status).toEqual(201);
//     });

// });

describe("GET/ get tests test", () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTY1ODYzMDM0OSwiZXhwIjoxNjYxMjIyMzQ5fQ.Z2htKzYLOS2aRmiQElAs99JRgpehrIAdpgthupdQx8c'
        ;

    it('Get tests by disciplines', async () => {
        const result = await supertest(app).get("/test/discipline").set('Authorization', token);;
        expect(result.status).toEqual(200);
    });

    it('Get tests by teachers', async () => {
        const result = await supertest(app).get("/test/teacher").set('Authorization', token);
        expect(result.status).toEqual(200);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});