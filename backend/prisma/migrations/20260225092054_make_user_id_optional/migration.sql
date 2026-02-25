/*
  Warnings:

  - Made the column `contextSentence` on table `Vocabulary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Vocabulary` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vocabulary" DROP CONSTRAINT "Vocabulary_userId_fkey";

-- AlterTable
ALTER TABLE "Vocabulary" ALTER COLUMN "contextSentence" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Vocabulary" ADD CONSTRAINT "Vocabulary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
