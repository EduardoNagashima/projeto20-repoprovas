import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export type userData = Omit<User, "id">

export async function signUp(user: userData) {
    const userAlreadyExists = await userRepository.findByEmail(user.email);
    if (userAlreadyExists) throw { type: 'CONFLICT', message: 'Email já está sendo utilizado.' }
    user.password = bcrypt.hashSync(user.password, 10);
    await userRepository.create(user);
}


export async function signIn(user: userData) {

}

export const userService = {
    signIn,
    signUp
}