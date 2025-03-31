import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import superHeroRoutes from './routes/superheroeRoutes.mjs';

const app =express();
const PORT=process.env.PORT||3000;

//middleware para parsear JSON

app.use(express.json());

//conexion a MongoDB
connectDB();

//configuracion de rutas
app.use ('/api', superHeroRoutes);

//manejo de errores para rutas no encontradas 
app.use((req, res)=>{res.status(404).send({mensaje:'Ruta no encontrada'})
})

//iniciar el servidor
app.listen (PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)
;})