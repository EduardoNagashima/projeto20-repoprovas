import { Request, Response } from "express";
import { userService } from "../services/userServices.js";
import { userSchema } from "../utils/schemas.js";

export async function signup(req: Request, res: Response) {
    const user = req.body;
    delete user.confirmPassword;
    const { error } = userSchema.validate(user);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    await userService.signUp(user);

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {

}