import prisma from "../config/database.js"

async function findByIds(disciplineId: number, teacherId: number) {
    return await prisma.teachersDiscipline.findFirst({ where: { AND: [{ teacherId }, { disciplineId }] } })
}

export const teacherDisciplineRepository = {
    findByIds
}