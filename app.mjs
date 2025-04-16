import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import superHeroRoutes from './routes/superheroeRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import expressEjsLayouts from 'express-ejs-layouts';
const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); 

const app =express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views')); // Ajustar la ruta a la carpeta de vistas

//configurar express-ejs-layouts
app.use(expressEjsLayouts);
app.set('layout', 'layout'); // Nombre del layout principal

//servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'));
//middleware para parsear JSON
app.set('views', path.join(__dirname, 'views')); // ajustar ruta
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));
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