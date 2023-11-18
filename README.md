# Proyecto 5 - e-commers Backend - UDD

## Dunamis Papeleria:

-   Este proyecto es la parte backend y esta realizado con express + MongoDB y subido a render como alojamiento en la nube

## Inicializar proyecto

para inicializar el proyecto se deben instalar los modulos de node con el siguiente comando

```sh
npm install
```

# Variables de entorno

Es importante que utilices las variables de entorno correcta para que el proyecto funcione correctamente

importante usar la siguiente sintaxis:
`process.env.PORT`

crear en la raiz del proyecto un archivo '.env' donde estarán las siguientes variables de entorno:

## PORT
-   puede ser tu máquina local o un alojamiento en la nube y se debe proporcionar en el metodo 'listen()'

## DB_DUNAMIS
-   variable para conectar la base de datos de MongoDB con el servidor, proveerla en el archivo 'db.config.js' en el metodo 'connect()' de mongoose

## SECRET_KEY
-   llave secreta para la generación del token

# cors

-   es importante hacer la correcta configuración del cors pasandole la ruta del frontend local o alojada en la nube que será la unica autorizada por el cors para conectarse a este servidor y po consiguiente a la base de datos en MongoDB

## Espero que te guste mi proyecto !
