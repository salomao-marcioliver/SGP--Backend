/*
  Warnings:

  - The primary key for the `Bolsista` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Bolsista" DROP CONSTRAINT "Bolsista_pkey",
ALTER COLUMN "num_matricula" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Bolsista_pkey" PRIMARY KEY ("num_matricula");
