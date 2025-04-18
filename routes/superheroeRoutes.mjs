import express from 'express';
import { obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController,
        obtenerSuperheroesPorAtributoController, crearSuperheroeController, 
        actualizarSuperheroeController, borrarSuperheroeIdController, borrarSuperheroePorNombreController, modificarSuperheroeFormularioController,mostrarIndexController} from '../controller/superheroController.mjs';
import {validarSuperheroe}from '../validation/validationRules.mjs';
import{manejarErroresDeValidacion}from '../validation/errorMiddleware.mjs'

const router =express.Router();


router.get('/', mostrarIndexController) // Ruta para la página de inicio
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', obtenerSuperheroesPorAtributoController);
router.post('/heroes/crear', validarSuperheroe(),manejarErroresDeValidacion, crearSuperheroeController ); 
router.put ('/heroes/actualizar/:id',validarSuperheroe(), manejarErroresDeValidacion, actualizarSuperheroeController );
router.delete('/heroes/borrar-nombre/:nombreSuperHeroe', borrarSuperheroePorNombreController);
router.delete('/heroes/borrar-id/:id', borrarSuperheroeIdController);
router.get('/dashboard',obtenerTodosLosSuperheroesController );
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/formulario/modificar-heroe/:id',modificarSuperheroeFormularioController);


router.get('/formulario/crear', (req, res) => {
    res.render('addSuperheroe'); 
});



   





 

export default router;