import express from 'express';
import { getAllUsers, signUp } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/usuarios', getAllUsers);

router.post('/usuarios', signUp);

export default router;




