import prisma from "../config/database.js";
import { userData } from "../services/userServices.js";

export async function create(user: userData) {
    prisma.user.create({ data: user });
}

