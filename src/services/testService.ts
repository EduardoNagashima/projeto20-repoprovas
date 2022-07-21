
import { categoryRepository } from "../repositories/categoryRepository.js";
import { disciplineRepository } from "../repositories/disciplineRepository.js";
import { teacherDisciplineRepository } from "../repositories/teacherDisciplineRepository.js";
import { teacherRepository } from "../repositories/teacherRepository.js";
import { testRepository } from "../repositories/testRepository.js";

export type testData = {
    "name": string
    "pdfUrl": string
    "categoryId": number
    "disciplineId": number
    "teacherId": number
}

async function create(test: testData) {
    const category = await categoryRepository.findById(test.categoryId);
    if (!category) throw { type: 'NOT_FOUND', message: "Categoria não encontrada!" };
    const discipline = await disciplineRepository.findById(test.disciplineId);
    if (!discipline) throw { type: 'NOT_FOUND', message: "Disciplina não encontrada!" };
    const teacher = await teacherRepository.findById(test.teacherId);
    if (!teacher) throw { type: 'NOT_FOUND', message: "Professor não encontrada!" };
    const teacherDiscipline = await teacherDisciplineRepository.findByIds(test.disciplineId, test.teacherId);
    delete test.teacherId;
    delete test.disciplineId;
    await testRepository.create({ ...test, teacherDisciplineId: teacherDiscipline.id });
}

export const testService = {
    create
}