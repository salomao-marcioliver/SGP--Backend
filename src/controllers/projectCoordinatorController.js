import { prisma } from '../lib/prisma.js';

// Buscar todos os projetos
export const getProjects = async (req, res) => {
  try {
    const projetos = await prisma.projetoCoordenador.findMany();
    return res.status(200).json(projetos);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
};

// Adicionar novo projeto
export const addProject = async (req, res) => {
  const { titulo, data_inicio, data_termino, codcoord, nome_coord, instituto_coord } = req.body;

  try {
    await prisma.projetoCoordenador.create({
      data: {
        titulo,
        data_inicio: new Date(data_inicio),
        data_termino: new Date(data_termino),
        codcoord: Number(codcoord),
        nome_coord,
        instituto_coord,
      },
    });

    return res.status(201).json('Projeto adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar projeto:', error);
    return res.status(500).json({ error: 'Erro ao adicionar projeto' });
  }
};

// Atualizar projeto
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { titulo, data_inicio, data_termino, codCoord, nome_coord, instituto_coord } = req.body;

  try {
    await prisma.projetoCoordenador.update({
      where: { codprojeto: Number(id) },
      data: {
        titulo,
        data_inicio: new Date(data_inicio),
        data_termino: new Date(data_termino),
        codcoord: codCoord,
        nome_coord,
        instituto_coord,
      },
    });

    return res.status(200).json('Projeto atualizado com sucesso.');
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    return res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
};

// Deletar projeto
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.projetoCoordenador.delete({
      where: { codprojeto: Number(id) },
    });

    return res.status(200).json('Projeto deletado com sucesso.');
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    return res.status(500).json({ error: 'Erro ao deletar projeto' });
  }
};
