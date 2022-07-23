import prisma from "../config/database.js";

async function findByDiscipline() {
    return await prisma.term.findMany({
        select: {
            id: true,
            number: true,
            discipline: true
        }
    })
}

const termRepository = {
    findByDiscipline
}

export default termRepository;