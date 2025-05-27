import ProjetoCoordenador from '../models/projectCoordinatorModel.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjetoCoordenador.findAll();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    res.status(500).json({ message: 'Erro interno ao buscar projetos.' });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await ProjetoCoordenador.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.error('Erro ao adicionar projeto:', error);
    res.status(500).json({ message: 'Erro ao adicionar projeto.' });
  }
};

export const updateProject = async (req, res) => {
  const id = req.params.id;
  try {
    const [updated] = await ProjetoCoordenador.update(req.body, { where: { codprojeto: id } });
    if (updated) {
      const updatedProject = await ProjetoCoordenador.findByPk(id);
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: 'Projeto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    res.status(500).json({ message: 'Erro ao atualizar projeto.' });
  }
};

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await ProjetoCoordenador.destroy({ where: { codprojeto: id } });
    if (deleted) {
      res.status(200).json({ message: 'Projeto deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Projeto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    res.status(500).json({ message: 'Erro ao deletar projeto.' });
  }
};
