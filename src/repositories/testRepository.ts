import { Test } from "@prisma/client"
import prisma from "../config/database.js"

async function create(test: Test) {
    await prisma.test.create({ data: test });
}

async function findByDiscipline() {
    return await prisma.term.findMany({
        select: {
            id: true,
            number: true,
            discipline: true
        }
    })
}

async function findByTeacher() {
    return prisma.teacher.findMany({})
}

export const testRepository = {
    create,
    findByDiscipline,
    findByTeacher
}