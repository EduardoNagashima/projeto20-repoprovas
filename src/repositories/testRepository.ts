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

export const testRepository = {
    create,
    findByDiscipline,
}