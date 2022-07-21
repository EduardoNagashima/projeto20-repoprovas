import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!authorization) throw { type: "BAD_REQUEST", message: 'invalid token' };
    const userId = jwt.verify(token, process.env.JWT_SECRET);
    res.locals = userId;
    next();
}