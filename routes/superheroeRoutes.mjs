import express from 'express';
import { obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController, obtenerSuperheroesPorAtributoController, crearSuperheroeController, actualizarSuperheroePorNombreController, borrarSuperheroeIdController, borrarSuperheroePorNombreController} from '../controller/superheroController.mjs';
import { validarSuperheroe } from '../validation/validationRules.mjs';
import { manejarErroresDeValidacion } from '../validation/errorMiddleware.mjs';

const router =express.Router();

router.get ('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', obtenerSuperheroesPorAtributoController);
router.post('/heroes/crear', crearSuperheroeController, manejarErroresDeValidacion, validarSuperheroe); 
router.put ('/heroes/actualizar/nombre/:nombreSuperheroe', actualizarSuperheroePorNombreController, manejarErroresDeValidacion, validarSuperheroe);
router.delete('/heroes/borrar-nombre/:nombreSuperheroe', borrarSuperheroePorNombreController);
router.delete('/heroes/borrar-id/:id', borrarSuperheroeIdController);





 

export default router;