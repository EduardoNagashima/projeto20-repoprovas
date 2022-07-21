import prisma from "../config/database.js";

async function findById(id: number) {
    return await prisma.teacher.findUnique({ where: { id } })
}

export const teacherRepository = {
    findById
}