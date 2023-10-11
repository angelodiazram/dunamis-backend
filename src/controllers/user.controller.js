import mongoose from 'mongoose';
import { Usuario } from '../models/User.model.js';
import bcrypt from 'bcrypt';
// metodo GET para usuarios
export const getAllUsers = async (req, res) => {
    try {        
        const allUsers = await Usuario.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: 'no pudimos encontrar a los usuarios'})
    }
}

// metodo POST para crear usuarios
export const signUp = async (req, res) => {
    try {
        const {email, pass, name, last_name, rut, adress} = req.body;
        
        // Validación para que los campos sean obligatorios 
        if (!email || !pass || !name || !last_name || !rut || !adress) {
            return res.status(400).json({message: 'Debes rellenar todos los campos'})
        }

        // verificación para ver si el usuarios existe
        const verifyUser = await Usuario.findOne({ rut: rut });
        if (verifyUser) {
            res.status(500).json({message: 'El rut ingresado ya tiene una cuenta'});
        }
        // generación de contraseña encriptada:
        const passEncrypt = await bcrypt.hash(pass , 10)

        const newUsuario = new Usuario({
            email, 
            pass: passEncrypt,
            name, 
            last_name, 
            rut, 
            adress
        });

        const saveUsuario = await newUsuario.save();
        res.status(201).json({message: `El usuario ${saveUsuario.name} ${saveUsuario.last_name} se ha creado con éxito`});
        console.log(req.body);
    } catch (error) {
        res.status(500).json({message: 'El usuario no ha podido ser registrado'})
        console.log(req.body);
    }
}

export const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}






