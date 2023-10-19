import { Usuario } from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// metodo GET para usuarios
export const getAllUsers = async (req, res) => {
    try {        
        const allUsers = await Usuario.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: 'no pudimos encontrar a los usuarios'})
    }
}

export const getUserByRut = async (req, res) => {
    try {
        const { rut } = req.params;

        const getUser = await Usuario.findOne({ rut: rut })
        res.status(200).json(getUser)
    } catch (error) {
        res.status(404).json({message: 'no pudimos encontrar al usuario'})
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

        const expireTime = Math.floor(new Date()/ 1000) + 3600

        const token = jwt.sign({
            exp: expireTime,
            data: {
                id: {
                    id: _id,
                    email: email,
                    name: name,
                    last_name: last_name
                }
            }
        }, process.env.SECRET_KEY);


        res.status(201).json({
            message: `El usuario ${saveUsuario.name} ${saveUsuario.last_name} se ha creado con éxito`, 
            token, 
            user: saveUsuario
        });

        console.log(req.body);

    } catch (error) {
        res.status(500).json({message: 'El usuario no ha podido ser registrado'})
        console.log(req.body);
    }
}

export const login = async (req, res) => {
    try {
        const { email, pass } = req.body;

        const verifyEmailUser = await Usuario.findOne({ email: email })

        // verificación para saber si el correo existe
        if (!verifyEmailUser) {
            return res.status(404).json({ message: 'El correo del usuario no ha sido encontrado'})
        }

        // verificar su la contraseña esta correcta:
        const verifyPassUser = bcrypt.compare(pass, verifyEmailUser.pass)
        if (!verifyPassUser) {
            return res.status(403).json({ message: 'La contraseña no es válida'})
        }

        /*
        implementación de token para el login de los usuarios
        METODO sign:
            1. tiempo de expiración (quedará en una hora) y verificación de la data del usuario

        */
        const expireTime = Math.floor(new Date()/ 1000) + 3600

        const { _id, name, last_name } = verifyEmailUser

        const token = jwt.sign({
            exp: expireTime,
            data: {
                id: {
                    id: _id,
                    email: email,
                    name: name,
                    last_name: last_name
                }
            }
        }, process.env.SECRET_KEY);

        res.json({token, user: verifyEmailUser});
        res.send(console.log('Usuario ingresado'));

    } catch (error) {
        res.status(403).json({ message: 'no pudimos verificar tu cuenta'})
    }
}

export const verifyUserToken = async(req, res) => {
    try {
        const user = await Usuario.findById(req.data.id).select('-pass')
        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: 'No pudimos verificar el token del usuario'})
    }
}

// METODO PUT PARA ACTUALIZAR A LOS USUARIOS REGISTRADOS
export const updateUser = async (req, res) => {
    try {
        const userEmail = req.params.rut;
        const updateData = req.body;

        const updateUser = await Usuario.findOneAndUpdate({ email: userEmail }, updateData, { new: true })
        if(!updateUser) {
            return res.status(404).json({ message: 'El correo no existe' })
        }

        const { name, last_name } = updateUser;

        res.status(202).json({ message: `El usuario ${name} ${last_name} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({ message: 'No es posible actualizar al usuario' })
    }
}

// METODO DELETE PARA ELIMINAR A LOS USUARIOS REGISTRADOS
export const deleteUser = async (req, res) => {
    try {
        const userEmail = req.params.email
    
        const removeUser = await Usuario.findOneAndDelete({ email: userEmail })
        if(!removeUser) {
            return res.status(404).json({ message: 'No se ha encontrado al usuario para eliminar'})
        }
        
        const {name, last_name} = removeUser;
        res.status(202).json({ message: `El usuario ${name} ${last_name} ha sido eliminado con éxito`})
        
    } catch (error) {
       res.status.json({ message: 'No es posible elinminar al usuario'}) 
    }
    
}





