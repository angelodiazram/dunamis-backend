import express from 'express';
import cors from 'cors';

import { db } from './config/db.config.js';

import dotenv from 'dotenv';
import { corsOptions } from './src/middlewares/cors.middleware.js';

dotenv.config();

const app = express();

// middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware CORS:
app.use(cors(corsOptions));
// middlewares de rutas:


app.listen(process.env.PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
})