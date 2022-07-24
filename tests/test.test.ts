import app from '../src/index';
import supertest from 'supertest';
import prisma from "../src/config/database.js";

describe("POST/ create new ", () => {
    it('Create new test', async () => {
        const body = {
            "name": "Prova de Testes automatizados",
            "pdfUrl": "https://s.bibliaon.com/img/imagens/me/ud/meu_deus_me_ajuda_f_l.jpg",
            "categoryId": 1,
            "disciplineId": 1,
            "teacherId": 1
        }
        const email = 'teste@gmail.com';
        const user = await prisma.user.findUnique({ where: { email } });
        const { token } = await prisma.session.findFirst({ where: { userId: user.id } })
        const result = await supertest(app).post("/test").send(body).auth(token, { type: 'bearer' })
        expect(result.status).toEqual(201);
    });
});


describe("GET/ get tests test", () => {

    it('Get tests by disciplines', async () => {
        const email = 'teste@gmail.com';
        const user = await prisma.user.findUnique({ where: { email } });
        const { token } = await prisma.session.findFirst({ where: { userId: user.id } });
        const result = await supertest(app).get("/test/discipline").auth(token, { type: 'bearer' })
        expect(result.status).toEqual(200);
    });

    it('Get tests by teachers', async () => {
        const email = 'teste@gmail.com';
        const user = await prisma.user.findUnique({ where: { email } });
        const { token } = await prisma.session.findFirst({ where: { userId: user.id } });
        const result = await supertest(app).get("/test/teacher").auth(token, { type: 'bearer' })
        expect(result.status).toEqual(200);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});