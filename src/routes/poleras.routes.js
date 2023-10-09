import express from 'express';

import { getAllPoleras } from '../controllers/polera.controller.js';

const router = express.Router();

router.get('/poleras', getAllPoleras);

export default router;