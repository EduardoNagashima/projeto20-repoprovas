// import app from '../src/index.js';
// import supertest from 'supertest';
// import prisma from "../src/config/database.js";

// describe("POST/ create new ", () => {
//     it('Create new test', async () => {
//         const email = 'teste@gmail.com';
//         const user = prisma.user.findUnique({ where: { email } });
//         const token = await prisma.session.findFirst({ where: { userId: user[0].id } })
//         const result = await supertest(app).post("/signup").set('Authorization', `Bearer ${token}`);
//         expect(result.status).toEqual(201);
//     });
// });


// describe("GET/ get tests test", () => {

//     it('Get tests by disciplines', async () => {
//         const email = 'teste@gmail.com';
//         const user = prisma.user.findUnique({ where: { email } });
//         const token = await prisma.session.findFirst({ where: { userId: user[0].id } });
//         const result = await supertest(app).get("/test/discipline").set('Authorization', `Bearer ${token}`);
//         expect(result.status).toEqual(200);
//     });

//     it('Get tests by teachers', async () => {
//         const email = 'teste@gmail.com';
//         const user = prisma.user.findUnique({ where: { email } });
//         const token = await prisma.session.findFirst({ where: { userId: user[0].id } });
//         const result = await supertest(app).get("/test/teacher").set('Authorization', `Bearer ${token}`);
//         expect(result.status).toEqual(200);
//     });
// });

// afterAll(async () => {
//     await prisma.$disconnect();
// });