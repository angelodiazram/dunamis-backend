import { Polera } from "../src/models/polera.model,js";

// metodo GET para poleras
export const getAllPoleras = async (req, res) => {
    try {
        const allPoleras = await Polera.find()
        res.status(200).json(allPoleras)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar las poleras'})
    }
} 