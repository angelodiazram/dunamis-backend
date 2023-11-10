import express from 'express';

import { getAllCuadernos } from '../controllers/cuaderno.controller.js';
const router = express.Router();

//RUTA CON METODO PARA VISUALIZAR TODAS LAS POLERAS
router.get('/cuadernos', getAllCuadernos);

//RUTA PARA VISUALIZAR SOLO UNA POLERA UTILIZANDO SU SKU
router.get('/cuaderno/:sku', getCuadernosBySku);

//RUTA CON METODO PARA CREAR NUEVAS POLERAS EN LA TIENDA
router.post('/cuaderno', createCuaderno);

//RUTA PARA CAPTAR UNA POLERA POR SU SKU Y ACTUALIZARLO
router.put('/cuaderno/:sku', updateCuaderno);

// RUTA PARA ELIMINAR UNA POLERA AL MOMENTO DE SER VENDIDA
router.delete('/cuaderno/:sku', deleteCuaderno);

export default router;