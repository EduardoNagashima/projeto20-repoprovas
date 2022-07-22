/*
  Warnings:

  - Added the required column `categoryId` to the `disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disciplines" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
