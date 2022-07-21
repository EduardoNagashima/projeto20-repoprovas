import prisma from "../config/database.js"

async function findById(id: number) {
    return await prisma.discipline.findUnique({ where: { id } });
}

export const disciplineRepository = {
    findById,
}