import express from 'express';
import { obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController, obtenerSuperheroesPorAtributoController, crearSuperheroeController, actualizarSuperheroePorNombreController, borrarSuperheroeIdController, borrarSuperheroePorNombreController} from '../controller/superheroController.mjs';
import {validarSuperheroe}from '../validation/validationRules.mjs';
import{manejarErroresDeValidacion}from '../validation/errorMiddleware.mjs'

const router =express.Router();

router.get ('/heroes', obtenerTodosLosSuperheroesController);

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

router.get('/heroes/buscar/:atributo/:valor', obtenerSuperheroesPorAtributoController);

router.get('/formulario/crear', (req, res) => {
    res.render('addSuperheroe'); 
});

router.post('/heroes/crear', validarSuperheroe(),manejarErroresDeValidacion, crearSuperheroeController ); 
router.put ('/heroes/actualizar/nombre/:nombreSuperHeroe',  validarSuperheroe,  manejarErroresDeValidacion, actualizarSuperheroePorNombreController );
router.delete('/heroes/borrar-nombre/:nombreSuperHeroe', borrarSuperheroePorNombreController);
router.delete('/heroes/borrar-id/:id', borrarSuperheroeIdController);
router.get('/dashboard',obtenerTodosLosSuperheroesController );
router.get('/greeting',(req, res) =>
    {const name ="Debora"; 
    res.render('greeting',{name})});

    router.get('/heroes/:id', obtenerSuperheroePorIdController);





 

export default router;