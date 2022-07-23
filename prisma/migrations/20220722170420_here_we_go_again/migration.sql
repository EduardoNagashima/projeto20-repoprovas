/*
  Warnings:

  - You are about to drop the column `categoryId` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `teachers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_categoryId_fkey";

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "categoryId";
