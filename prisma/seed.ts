import prisma from "../src/config/database.js";

const terms = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
]

const categories = [
    { name: 'Projeto' },
    { name: 'Prática' },
    { name: 'Recuperação' },
]

const teachers = [
    { name: 'Diego Pinho' },
    { name: 'Bruna Hamori' },
]

const disciplines = [
    { name: "HTML e CSS", termId: 1 },
    { name: "JavaScript", termId: 2 },
    { name: "React", termId: 3 },
    { name: "Humildade", termId: 1 },
    { name: "Planejamento", termId: 2 },
    { name: "Autoconfiança", termId: 3 },
]

const teachersDisciplines = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 },
]

async function main() {
    await prisma.term.createMany({ data: terms })
    await prisma.category.createMany({ data: categories })
    await prisma.teacher.createMany({ data: teachers })
    await prisma.discipline.createMany({ data: disciplines })
    await prisma.teacherDiscipline.createMany({ data: teachersDisciplines })
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})