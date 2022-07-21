import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();


export type userData = Omit<User, "id">

export async function signUp(user: userData) {
    const userAlreadyExists = await userRepository.findByEmail(user.email);
    if (userAlreadyExists) throw { type: 'CONFLICT', message: 'Email já está sendo utilizado.' }
    user.password = bcrypt.hashSync(user.password, 10);
    await userRepository.create(user);
}

export async function signIn(user: userData) {
    const userInfo = await userRepository.findByEmail(user.email);
    const correctPassword = bcrypt.compareSync(user.password, userInfo.password);
    if (!userInfo || !correctPassword) throw { type: 'NOT_FOUND', message: 'Usuário não encontrado.' };
    return jwt.sign({ userId: userInfo.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });
}

export const userService = {
    signIn,
    signUp
}