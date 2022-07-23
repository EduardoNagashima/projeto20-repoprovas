
import { Test } from "@prisma/client";
import { categoryRepository } from "../repositories/categoryRepository.js";
import { disciplineRepository } from "../repositories/disciplineRepository.js";
import { teacherDisciplineRepository } from "../repositories/teacherDisciplineRepository.js";
import { teacherRepository } from "../repositories/teacherRepository.js";
import termRepository from "../repositories/termRepository.js";
import { testRepository } from "../repositories/testRepository.js";

export interface testData extends Test {
    disciplineId: number
    teacherId: number
}

async function create(test: testData) {
    const category = await categoryRepository.findById(test.categoryId);
    if (!category) throw { type: 'NOT_FOUND', message: "Categoria não encontrada!" };
    const discipline = await disciplineRepository.findById(test.disciplineId);
    if (!discipline) throw { type: 'NOT_FOUND', message: "Disciplina não encontrada!" };
    const teacher = await teacherRepository.findById(test.teacherId);
    if (!teacher) throw { type: 'NOT_FOUND', message: "Professor não encontrada!" };
    const teacherDiscipline = await teacherDisciplineRepository.findByIds(test.disciplineId, test.teacherId);
    if (!teacherDiscipline) throw { type: 'NOT_FOUND', message: "Professor e disciplina não compativeis!" };
    test = { ...test, teacherDisciplineId: teacherDiscipline.id };
    delete test.disciplineId
    delete test.disciplineId;
    await testRepository.create(test);
}

async function findByDiscipline() {
    const TermDiscipline = await termRepository.findByDiscipline();
    return {
        ...TermDiscipline,
    }
}

async function findByTeacher() {
    return await testRepository.findByTeacher();
}

export const testService = {
    create,
    findByDiscipline,
    findByTeacher
}