import { Request, Response } from "express";
import { userSchema } from "../utils/schemas.js";

export async function signup(req: Request, res: Response) {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };


    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {

}