import express from 'express';

import { createPolera, getAllPoleras } from '../controllers/polera.controller.js';

const router = express.Router();

//RUTA CON METODO PARA  VISULAIZAR LAS POLERAS
router.get('/poleras', getAllPoleras);

//RUTA CON METODO PARA CREAR NUEVAS POLERAS EN LA TIENDA
router.post('/poleras', createPolera);


export default router;