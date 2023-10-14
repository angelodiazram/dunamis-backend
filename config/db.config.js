import mongoose from 'mongoose';

export const db = async () => { //! esta función se debe ejecutar en el servidor
    try {
        await mongoose.connect(process.env.DB_DUNAMIS, {
            useNewUrlParser: true,
            useUnifiedTopoLogy: true
        })
        console.log('Conectado correctamente a la DB en MongoDB!')
    } catch (error) {
        console.error('Error de conexión con MongoDB', error)
    }
}