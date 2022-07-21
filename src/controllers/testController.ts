import { Request, Response } from "express"
import { testService } from "../services/testService.js"
import { testSchema } from "../utils/schemas.js";

async function create(req: Request, res: Response) {
    const test = req.body;
    const { error } = testSchema.validate(test);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    await testService.create(test);

    return res.sendStatus(201);
}

export const testController = {
    create
}