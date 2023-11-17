import jwt from "jsonwebtoken";

// !LOS MIDDLEWARE TIENE 3 PARAMETROS SIEMPRE (el mismo que todos los metodos de express incluido el "next"):
export const authRequire = (req, res, next) => {
    try {
        //* forma sin desesctructurar
        // const auth = req.headers.authorization; // mismo nombre que en los headers provenientes del front
    
        // forma desestructurada:
        const {authorization} = req.headers
        
        // verificación:
            /*
            metodo verify recibe dos argumentos:
            1. el token como tal almacenado en los headers
            2. la clave secreta (variables de entorno)
            */
        const decoded = jwt.verify(authorization, process.env.SECRET_KEY)
        const actualTime = (new Date()/1000) // fecha al moento de la utorización visualizada en ms

        if (actualTime > decoded.exp) {
            return res.status(401).json({ message: 'Tiempo del token expirado'});
        }

        req.data = decoded.data //? INFORMACIÓN ENVIADA POR EL REQUEST
        
    } catch (error) {
        return res.status(401).json(error)
    }
    // !NEXT SIEMPRE FUERA DEL TRYCATCH
    next() //! EJECUTAR ESTE NEXT ES DE SUMA IMPORTACIA PARA QUE UNA VEZ VALIDADA LA INFORMACIÓN, SE DE EL PASO A LA RESPUESTA Y CONTINUE EL PROCESO DE EJECUCIÓN
}