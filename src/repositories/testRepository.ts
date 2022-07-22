import { Test } from "@prisma/client"
import prisma from "../config/database.js"

async function create(test: Test) {
    await prisma.test.create({ data: test });
}

async function findByDiscipline() {
    return await prisma.term.findMany({
        select:{
            id: true,
            number: true,
            discipline:{
                select:{
                    id: true,
                    name: true,
                    category:{
                        select:{
                            id:true,
                            name: true,
                            test: {
                                select:{
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    teachersDisciplines:{
                                        select: {
                                            teacher:true
                                        }
                                    }
                                }
                            }
                            
                        }
                    }
                }
            }
    }})
}

async function findByTeacher(){
    return prisma.teacher.findMany({
        select:{
            id: true,
            name: true,
            teachersDisciplines:{
                select:{
                    Test:{
                        select:{
                            category:{
                                select:{
                                    id:true,
                                    name: true,
                                    test: {
                                        select:{
                                            id: true,
                                            name: true,
                                            pdfUrl: true,
                                            teachersDisciplines: {
                                                include:{discipline: true}
                                            }
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
    findByDiscipline,
    findByTeacher
}