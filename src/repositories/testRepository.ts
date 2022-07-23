import { Test } from "@prisma/client"
import prisma from "../config/database.js"

async function create(data: Test) {
    await prisma.test.create({ data });
}

async function findByTeacher() {
    return prisma.teacherDiscipline.findMany({
        include: {
            teacher: {},
            Test: {
                include: {
                    category: {
                        include: {
                            test: {
                                include: {
                                    teachersDisciplines: {
                                        include: {
                                            discipline: {}
                                        }
                                    }
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
    findByTeacher
}