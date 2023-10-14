import express from 'express';

import { createPolera, deletePolera, getAllPoleras, getPoleraBySku, updatePolera } from '../controllers/polera.controller.js';
// import { authRequire } from '../middlewares/auth.middleware.js';

const router = express.Router();

//RUTA CON METODO PARA VISUALIZAR TODAS LAS POLERAS
router.get('/poleras', getAllPoleras);

//RUTA PARA VISUALIZAR SOLO UNA POLERA UTILIZANDO SU SKU
router.get('/poleras/:sku', getPoleraBySku);

//RUTA CON METODO PARA CREAR NUEVAS POLERAS EN LA TIENDA
router.post('/poleras', createPolera);

//RUTA PARA CAPTAR UNA POLERA POR SU SKU Y ACTUALIZARLO
router.put('/poleras/:sku', updatePolera);

// RUTA PARA ELIMINAR UNA POLERA AL MOMENTO DE SER VENDIDA
router.delete('/poleras/:sku', deletePolera);

export default router;