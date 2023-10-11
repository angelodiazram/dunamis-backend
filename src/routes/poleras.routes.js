import express from 'express';

import { createPolera, deletePoleraBySku, getAllPoleras, updatePoleraBySku } from '../controllers/polera.controller.js';

const router = express.Router();

//RUTA CON METODO PARA  VISULAIZAR LAS POLERAS
router.get('/poleras', getAllPoleras);

//RUTA CON METODO PARA CREAR NUEVAS POLERAS EN LA TIENDA
router.post('/poleras', createPolera);

//RUTA PARA CAPTAR UNA POLERA POR SU SKU Y ACTUALIZARLO
router.put('/poleras/:sku', updatePoleraBySku);

// RUTA PARA ELIMINAR UNA POLERA AL MOMENTO DE SER VENDIDA
router.delete('/poleras/:sku', deletePoleraBySku);

export default router;