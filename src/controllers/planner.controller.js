//! CONTROLADORES PARA PRODUCTOS PLANNER

import { Planner } from "../models/Planner.model.js";

//? METODO GET PARA OBTENER LOS PLANNER 'find()'
export const getAllPlanners = async (req, res) => {
    try {
        const allPlanners = await Planner.find()

        // if(allPlanners = []) {
        //     return res.status(404).json({ message: 'No hay stock del producto'})
        // }
        
        res.status(200).json(allPlanners)
    } catch (error) {
        res.status(404).json({ message: 'No pudimos encontrar los planners'});
    }
}

//? METODO GET PARA ENCONTRAR UN PLANNER UNICO POR EL SKU 'findOne'
export const getPlannersBySku = async (req, res) => {
    try {
        const { sku } = req.params;
        const getPlanner = await Planner.findOne({ SKU: sku });

        if(!getPlanner) {
            return res.status(404).json({ message: 'No hay stock del producto'})
        }

        res.status(200).json(getPlanner);
    } catch (error) {
        res.status(404).json({ message: 'No pudimos encontrar el planner'});
    }
}

//? METODO POST PARA CREAR UN PLANNE 'save()'
export const createPlanner = async (req, res) => {
    try {
        const newPlanner = req.body;
        const planner = new Planner(newPlanner);
        const savePlanner = await planner.save();

        res.status(201).json({ message: `Se ha creado el planner ${savePlanner}` });
    } catch (error) {
        res.status(500).json({ message: 'No se ha podido crear el producto'});
    }
}

//? METODO PARA ACTUALIZAR UN PLANNER 'findOneAndUpdate()'
export const updatePlanner = async (req, res) => {
    try {
        const { sku } = req.params;
        const newData = req.body;

        const updatePlanner = await Planner.findByIdAndUpdate({ SKU: sku}, newData, {new: true})
        
        if(!updatePlanner) {
            return res.status(404).json({ message: 'El planner no se encuentra en la DB'})
        }

        const { SKU } = updatePlanner;

        res.status(202).json({ message: `El planner con el SKU: ${SKU} ha sido actualizado` })
    } catch (error) {
        res.status(500).json({ message: 'No es posible actualizar el planner'})
    }
}

//? METODO PARA ELIMINAR UN PLANNER 'findOneAndDelete()'
export const deletePlanner = async (req, res) => {
    try {
        const { sku } = req.params;
        const removePlanner = await Planner.findOneAndDelete({ SKU: sku })

        if(!removePlanner) {
            return res.status(404).json({ message: 'No se ha encontrado en planner para eliminar '})
        }

        const { SKU } = removePlanner;

        res.status(202).json({ message: `El planner con el ${SKU} ha sido eliminado`});
    } catch (error) {
        res.status(400).json({ message: 'No es posible eliminar el planner'});
    }
}