import express from 'express';

import { getAllPlanners, getPlannersBySku, createPlanner, updatePlanner, deletePlanner } from '../controllers/planner.controller.js';
const router = express.Router();

//RUTA CON METODO PARA VISUALIZAR TODOS LOS PLANNERS
router.get('/planners', getAllPlanners);

//RUTA PARA VISUALIZAR SOLO UN PLANNER UTILIZANDO SU SKU
router.get('/planners/:sku', getPlannersBySku);

//RUTA CON METODO PARA CREAR NUEVOS PLANNERS EN LA TIENDA
router.post('/planners', createPlanner);

//RUTA PARA OBTENER UN PLANNER POR SU SKU Y ACTUALIZARLO
router.put('/planners/:sku', updatePlanner);

// RUTA PARA ELIMINAR UNA POLERA AL MOMENTO DE SER VENDIDA
router.delete('/planners/:sku', deletePlanner);

export default router;