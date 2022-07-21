import { Test } from "@prisma/client"
import prisma from "../config/database.js"

async function create(test: Test) {
    await prisma.test.create({ data: test });
}

export const testRepository = {
    create,
}