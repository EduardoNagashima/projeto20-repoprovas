import prisma from "../config/database.js";

async function findById(id: number) {
    return await prisma.category.findUnique({ where: { id } })
}


export const categoryRepository = {
    findById
}