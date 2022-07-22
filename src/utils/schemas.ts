import Joi from "joi";

export const signUpSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref('password'))
});

export const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const testSchema = Joi.object({
    name: Joi.string().required(),
    pdfUrl: Joi.string().required().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    categoryId: Joi.number().integer().required(),
    disciplineId: Joi.number().integer().required(),
    teacherId: Joi.number().integer().required()
});