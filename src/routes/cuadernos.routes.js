import express from 'express';

import { createCuaderno, deleteCuaderno, getAllCuadernos, getCuadernosBySku, updateCuaderno } from '../controllers/cuaderno.controller.js';
const router = express.Router();

//RUTA CON METODO PARA VISUALIZAR TODAS LAS POLERAS
router.get('/cuadernos', getAllCuadernos);

//RUTA PARA VISUALIZAR SOLO UNA POLERA UTILIZANDO SU SKU
router.get('/cuadernos/:sku', getCuadernosBySku);

//RUTA CON METODO PARA CREAR NUEVAS POLERAS EN LA TIENDA
router.post('/cuadernos', createCuaderno);

//RUTA PARA CAPTAR UNA POLERA POR SU SKU Y ACTUALIZARLO
router.put('/cuadernos/:sku', updateCuaderno);

// RUTA PARA ELIMINAR UNA POLERA AL MOMENTO DE SER VENDIDA
router.delete('/cuadernos/:sku', deleteCuaderno);

export default router;