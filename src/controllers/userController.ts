import { Request, Response } from "express";
import { userService } from "../services/userServices.js";
import { signUpSchema, signInSchema } from "../utils/schemas.js";

export async function signup(req: Request, res: Response) {
    const user = req.body;
    const { error } = signUpSchema.validate(user);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    delete user.confirmPassword;
    await userService.signUp(user);

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
    const user = req.body;
    const { error } = signInSchema.validate(user);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    const token = await userService.signIn(user);
    res.status(200).send(token);
}