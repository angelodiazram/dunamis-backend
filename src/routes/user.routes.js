import express from 'express';
import { getAllUsers, getUserByRut, login, signUp } from '../controllers/user.controller.js';
import { authRequire } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/usuarios' ,getAllUsers);

router.get('/usuarios/:rut', getUserByRut);

router.post('/usuarios', signUp);

router.post('/login', login);

export default router;



