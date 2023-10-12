
import { Polera } from "../models/Polera.model.js"

// metodo GET para poleras
export const getAllPoleras = async (req, res) => {
    try {
        const allPoleras = await Polera.find()
        res.status(200).json(allPoleras)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar las poleras'})
    }
} 

// metodo POST para crar nuevas poleras
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

//metodo PUT para actualizar alguna polera utilizando si SKU como identificador
export const updatePoleraBySku = async (req, res) => {
    try {
        const poleraSku = req.params.sku //! debe ser el mismo nombre puesto en la ruta "sku" para poder obtenerlo del "params"
        console.log(poleraSku);
        const updateDataPolera = req.body
        const updatePolera = await Polera.findOneAndUpdate({ SKU: poleraSku }, updateDataPolera, { new: true }) 
            /*
                Este metodo de mongoose permite encontrar un documento por medio de una propiedad de este
                y actualizarlo
            */
        if (!updatePolera) {
            return res.status(404).json({message: 'Polera no encontrada'})
        }
        res.status(202).json({message: `El producto ${updatePolera} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: `No pudimos actualizar el producto el producto nuevo`})
    }
}


// metodo DELETE para eliminar una polera de la base de datos, al momento de ser comprada

export const deletePoleraBySku = async (req, res) => {
    try {
        const poleraSku =  req.params.sku
        const removePolera = await Polera.findOneAndDelete({ SKU: poleraSku })

        if(!removePolera) {
            return res.status(404).json({message: 'no se ha encontrado el producto a eliminar'})
        } else {
            res.status(202).json({message: `polera con SKU: ${removePolera.SKU} ha sido comprada con éxito`})
        }
        
    } catch (error) {
        res.status(500).json({message: `el producto a comprar no tiene stock`})
        
    }
}