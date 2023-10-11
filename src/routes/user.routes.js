import express from 'express';
import { getAllUsers, login, signUp } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/usuarios', getAllUsers);

router.post('/usuarios', signUp);

router.post('/login', login);

export default router;



