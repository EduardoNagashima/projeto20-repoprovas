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
            Discipline: {
                select: {
                    id: true,
                    name: true,
                    teachersDisciplines: {
                        select: {
                            Test: {
                                select: {
                                    category: {
                                        select: {
                                            id: true,
                                            name: true,
                                            Test: {
                                                select: {
                                                    id: true,
                                                    teachersDisciplines: { select: { teacher: { select: { id: true, name: true } } } },
                                                    name: true,
                                                    pdfUrl: true,
                                                }
                                            }

                                        }
                                    },

                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

export const testRepository = {
    create,
    findByDiscipline,
}