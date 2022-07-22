import { Router } from "express";
import { testController } from "../controllers/testController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";

export const testRouter = Router();

testRouter.use(tokenValidation);
testRouter.post('/test', testController.create);
testRouter.get('/test/discipline', testController.findByDiscipline);
testRouter.get('/test/teacher', testController.findByTeacher);