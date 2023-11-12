//! CONTROLADORES PARA PRODUCTOS CUADERNOS

import { Cuaderno } from '../models/Cuaderno.model.js';

//? METODO GET PARA TRAER TODAS LOS CUADERNOS 'find()'
export const getAllCuadernos = async (req, res) => {
    try {
        const allCuadernos = await Cuaderno.find();

        // if(allCuadernos = []) {
        //     return res.status(404).json({ message: 'No hay stock del producto' });
        // }
        
        res.status(200).json(allCuadernos)
    } catch (error) {
        res.status(404).json({ message: 'No pudimos encontrar los cuadernos' });
    }
}

//? METODO GET PARA ENCONTRAR UN CUADERNO UNICO POR EL SKU 'findOne()'
export const getCuadernosBySku = async (req, res) => {
    try {
        const { sku } = req.params;
        const getCuaderno = await Cuaderno.findOne({ SKU: sku });
        
        if(!getCuaderno) {
            return res.status(404).json({ message: 'No hay stock del producto' });
        }

        res.status(200).json(getCuaderno);
    } catch (error) {
        res.status(404).json({ message: 'No pudimos encontrar el cuaderno' });        
    }
}

//? METODO POST PARA CREAR UN NUEVO CUADERNO 'save()'
export const createCuaderno = async (req, res) => {
    try {
        const newCuaderno = req.body;
        const cuaderno = new Cuaderno(newCuaderno);
        const saveCuaderno = await cuaderno.save();
    
        res.status(201).json({ message: `Se ha creado la polera: ${saveCuaderno}`});
    } catch (error) {
        res.status(500).json({ message: `no se pudo crear el producto`});
    }
}

//? METODO PUT PARA ACTUALIZAR UN CUADERNO 'findOneAndUpdate()'
export const updateCuaderno = async (req, res) => {
    try {
        const { sku } = req.params;
        const newData = req.body;

        const updateCuaderno = await Cuaderno.findOneAndUpdate({ SKU: sku }, newData, { new: true })
        if(!updateCuaderno) {
            return res.status(404).json({ message: 'El cuaderno no se encuentra en la base de datos'})
        }

        const { SKU } = updateCuaderno;

        res.status(202).json({ message: `El cuaderno con el SKU: ${SKU} ha sido actualizado`})
    } catch (error) {
        res.status(500).json({ message: 'No es posible actualizar el cuaderno' })
    }
}

//? METODO DELETE PARA ELIMINAR UN CUADERNO 'findOneAndDelete()'
export const deleteCuaderno = async (req, res) => {
    try {
        const { sku } = req.params;
        const removeCuaderno = await Cuaderno.findOneAndDelete({ SKU: sku })
        if(!removeCuaderno) {
            return res.status(404).json({ message: 'No se ha encontrado el cuaderno para eliminar'})
        }

        const { SKU } = removeCuaderno;

        res.status(202).json({ message: `El cuaderno con el SKU: ${SKU} ha sido eliminado`})
    } catch (error) {
        res.status(400).json({ message: 'No es posible eliminar el cuaderno'})
    }
}




