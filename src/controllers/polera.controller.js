import mongoose from "mongoose"
import { Polera } from "../models/polera.model.js"

// metodo GET para poleras
export const getAllPoleras = async (req, res) => {
    try {
        const allPoleras = await Polera.find()
        res.status(200).json(allPoleras)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar las poleras'})
    }
} 

export const createPolera = async (req, res) => {
    try {
        const newPolera = req.body;
        const polera = new Polera(newPolera);
        const savePolera = await polera.save() //* metodo para guarda el objeto en la base de mongo
        res.status(201).json({message: `se ha creado la polera: ${savePolera}`})
    } catch (error) {
        res.status(500).json({message: `No pudimos crear el producto nuevo`})
    }
}