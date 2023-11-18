import express from 'express';
import { deleteUser, getAllUsers, getUserByRut, login, signUp, updateUser } from '../controllers/user.controller.js';
// import { authRequire } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/usuarios' ,getAllUsers);

router.get('/usuarios/:rut', getUserByRut);

router.post('/usuarios', signUp);

router.post('/login', login);

// router.get('/verify-token', authRequire, verifyUser);

router.put('/usuarios/:email', updateUser);

router.delete('/usuarios/:email', deleteUser);

export default router;