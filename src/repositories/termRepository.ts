import prisma from "../config/database.js";

async function findByDiscipline() {
    return await prisma.term.findMany({
        orderBy: { number: "asc" },
        include: {
            discipline: {
                include: {
                    teachersDisciplines: {
                        include: {
                            discipline: {},
                            teacher: {},
                            Test: {
                                include: { category: {} }
                            }
                        }
                    }
                }
            }
        }
    })
}


const termRepository = {
    findByDiscipline
}

export default termRepository;