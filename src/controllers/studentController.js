import { prisma } from '../lib/prisma.js';

// Buscar todos os bolsistas com info do projeto
export const getStudents = async (req, res) => {
  try {
    const bolsistas = await prisma.bolsista.findMany({
      include: {
        projeto: {
          select: {
            titulo: true,
            nome_coord: true,
          },
        },
      },
    });

    // Converte os campos BigInt para string
    const serialized = bolsistas.map((b) => ({
      ...b,
      num_matricula: b.num_matricula.toString(),
      codprojeto: b.codprojeto, // opcional: se também for BigInt, use .toString()
    }));

    return res.status(200).json(serialized);
  } catch (error) {
    console.error('Erro ao buscar bolsistas:', error);
    return res.status(500).json({ error: 'Erro ao buscar bolsistas' });
  }
};

// Adicionar novo bolsista
export const addStudent = async (req, res) => {
  const { num_matricula, nome, data_nascimento, curso, instituto, codprojeto } = req.body;

  try {
    await prisma.bolsista.create({
      data: {
        num_matricula: BigInt(num_matricula),
        nome,
        data_nascimento: new Date(data_nascimento),
        curso,
        instituto,
        codprojeto: Number(codprojeto),
      },
    });

    return res.status(201).json('Bolsista adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar bolsista:', error);
    return res.status(500).json({ error: 'Erro ao adicionar bolsista' });
  }
};

// Atualizar bolsista
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { num_matricula, nome, data_nascimento, curso, instituto, codprojeto } = req.body;

  try {
    await prisma.bolsista.update({
      where: { num_matricula: BigInt(id) },
      data: {
        num_matricula: BigInt(num_matricula),
        nome,
        data_nascimento: new Date(data_nascimento),
        curso,
        instituto,
        codprojeto: Number(codprojeto),
      },
    });

    return res.status(200).json('Bolsista atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar bolsista:', error);
    return res.status(500).json({ error: 'Erro ao atualizar bolsista' });
  }
};

// Remover bolsista
export const removeStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.bolsista.delete({
      where: { num_matricula: BigInt(id) },
    });

    return res.status(200).json('Bolsista removido com sucesso!');
  } catch (error) {
    console.error('Erro ao remover bolsista:', error);
    return res.status(500).json({ error: 'Erro ao remover bolsista' });
  }
};
