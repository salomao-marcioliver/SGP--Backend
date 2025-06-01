-- CreateTable
CREATE TABLE "ProjetoCoordenador" (
    "codprojeto" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_termino" TIMESTAMP(3) NOT NULL,
    "codcoord" INTEGER NOT NULL,
    "nome_coord" TEXT NOT NULL,
    "instituto_coord" TEXT NOT NULL,

    CONSTRAINT "ProjetoCoordenador_pkey" PRIMARY KEY ("codprojeto")
);

-- CreateTable
CREATE TABLE "Bolsista" (
    "num_matricula" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "curso" TEXT NOT NULL,
    "instituto" TEXT NOT NULL,
    "codprojeto" INTEGER NOT NULL,

    CONSTRAINT "Bolsista_pkey" PRIMARY KEY ("num_matricula")
);

-- AddForeignKey
ALTER TABLE "Bolsista" ADD CONSTRAINT "Bolsista_codprojeto_fkey" FOREIGN KEY ("codprojeto") REFERENCES "ProjetoCoordenador"("codprojeto") ON DELETE CASCADE ON UPDATE CASCADE;
