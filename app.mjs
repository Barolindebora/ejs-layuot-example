import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import superHeroRoutes from './routes/superheroeRoutes.mjs';
import { obtenerTodosLosSuperheroesController } from './controller/superheroController.mjs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); 

const app =express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware para parsear JSON
app.set('views', path.join(__dirname, 'views')); // ajustar ruta


app.use(express.static('views'));
//conexion a MongoDB
connectDB();


//configuracion de EJS 
app.set ('view engine', 'ejs'); 


//configuracion de rutas
app.use ('/api', superHeroRoutes);




//manejo de errores para rutas no encontradas 
app.use((req, res)=>{res.status(404).send({mensaje:'Ruta no encontrada'})
})


//iniciar el servidor
app.listen (PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)
;})