
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

// METODO PARA ENCONTRAR UNA SOLA POLERA USANDO SU SKU
export const getPoleraBySku = async (req, res) => {
    try {
        const { sku } = req.params;
        const getPolera = await Polera.findOne({ SKU: sku })
        
        res.status(200).json(getPolera)
    } catch (error) {
        res.status(404).json({ message: 'no pudimos encontra el producto'})
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

//METODO PARA ACTUALIZAR LA INFORMACIÓN DE UNA POLERA

export const updatePolera = async (req, res) => {
    try {
        const poleraSku = req.params.rut;
        const updateData = req.body;

        const updatePolera = await Usuario.findOneAndUpdate({ SKU: poleraSku  }, updateData, { new: true })
        if(!updatePolera) {
            return res.status(404).json({ message: 'La polera no se encuentra en la base de datos' })
        }
        
        const { SKU } = updatePolera;
        
        res.status(202).json({ message: `La polera con el SKU: ${SKU} ha sido actualizada`})
    } catch (error) {
        res.status(500).json({ message: 'No es posible actualizar el producto' })
    }
}

// METODO PARA ELIMINAR UNA POLERA 

export const deletePolera = async (req, res) => {
    try {
        const poleraSku = req.params.sku

        const removePolera = await Polera.findOneAndDelete({ SKU: poleraSku })
        if(!removePolera) {
            return res.status(404).json({ message: 'No se ha encontrado al usuario para eliminar'})
        }
        
        const { SKU } = removePolera
        res.status(202).json({ message: `La polera con el SKU: ${SKU} ha sido removida`})
        
    } catch (error) {
       res.status.json({ message: 'No es posible elinminar al usuario'}) 
    }
    
}
