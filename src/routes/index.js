import express from 'express';

// Controllers de autenticação
import { auth, login } from '../controllers/authController.js';

// Controllers de projeto
import {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
} from '../controllers/projectCoordinatorController.js';

// Controllers de bolsistas
import {
    getStudents,
    addStudent,
    updateStudent,
    removeStudent,
} from '../controllers/studentController.js';

const router = express.Router();

// Autenticação
router.post('/login', login);

// Projetos
router.get('/projetos', auth, getProjects);
router.post('/projetos', auth, addProject);
router.put('/projetos/:id', auth, updateProject);
router.delete('/projetos/:id', auth, deleteProject);

// Bolsistas
router.get('/bolsistas', auth, getStudents);
router.post('/bolsistas', auth, addStudent);
router.put('/bolsistas/:id', auth, updateStudent);
router.delete('/bolsistas/:id', auth, removeStudent);

export default router;
