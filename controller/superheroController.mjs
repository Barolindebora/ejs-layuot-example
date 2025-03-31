import { obtenerSuperheroesPorId,obtenerTodosLosSuperheroes, obtenerSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearSuperheroe, actualizarSuperheroePorNombre, borrarSuperheroePorId, borrarSuperheroePorNombre } from "../services/superheroService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseViews.mjs";


export async function  obtenerSuperheroePorIdController(req, res) {
    try{ 
        const {id}=req.params;
        const superheroe =await obtenerSuperheroesPorId(id);
        if (!superheroe)
            return res.status(404).send ({mensaje:'Superheroe no encontrado'});
        const superheroeFormateado=renderizarSuperheroe(superheroe)
        res.status(200).json(superheroeFormateado);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener el superheroe', error:error.mensaje})
    }
    
}


export async function  obtenerTodosLosSuperheroesController(req, res) {
    try{ 
        const superheroes =await obtenerTodosLosSuperheroes();
       
        const superheroesFormateados=renderizarListaSuperheroes(superheroes)
        res.status(200).json(superheroesFormateados);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener los superheroes', error:error.mensaje})
    }
    
}


export async function  obtenerSuperheroesPorAtributoController(req, res) {
    try{ 
        const {atributo, valor}=req.params;
        const superheroes =await obtenerSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length===0)
            return res.status(404).send ({mensaje:'No se encontraron superheroes con ese atributo'});
        const superheroesFormateados=renderizarListaSuperheroes(superheroes)
        res.status(200).json(superheroesFormateados);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al buscar los superheroes', error:error.mensaje})
    }
    
}

export async function  obtenerSuperheroesMayoresDe30Controller(req, res) {
    try{ 
       
        const superheroes =await obtenerSuperheroesMayoresDe30();
        if (superheroes.length===0)
            return res.status(404).send ({mensaje:'No se encontraron superheroes mayores de 30 años'});
        const superheroesFormateados=renderizarListaSuperheroes(superheroes)
        res.status(200).json(superheroesFormateados);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener los superheroes mayores de 30', error:error.mensaje})
    }
    
}

export async function crearSuperheroeController(req, res) {
    try {
        const datosSuperheroe = req.body;

        // Validación básica
        if (!datosSuperheroe.nombreSuperheroe || !datosSuperheroe.nombreReal) {
            return res.status(400).send({ mensaje: "El nombre del superhéroe y el nombre real son obligatorios" });
        }

        const nuevoSuperheroe = await crearSuperheroe(datosSuperheroe);
        res.status(201).json(renderizarSuperheroe(nuevoSuperheroe));

    } catch (error) {
        res.status(500).send({ mensaje: "Error al crear el superhéroe", error: error.message });
    }
}

export async function actualizarSuperheroePorNombreController(req, res) {
    const { nombreSuperheroe } = req.params; // Nombre del superhéroe que se quiere actualizar
    const nuevosDatos = req.body; // Datos a actualizar desde el cuerpo de la solicitud

    try {
        const superheroeActualizado = await actualizarSuperheroePorNombre(nombreSuperheroe, nuevosDatos);

        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        // Devolver el superhéroe actualizado
        res.status(200).json(superheroeActualizado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}


export async function borrarSuperheroePorNombreController(req, res) {
    const { nombreSuperheroe } = req.params; // Nombre del superhéroe que se quiere borrar

    try {
        const superheroeBorrado = await borrarSuperheroePorNombre(nombreSuperheroe);

        if (!superheroeBorrado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        // Devolver el superhéroe borrado
        res.status(200).json(superheroeBorrado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el superhéroe', error: error.message });
    }


}

export async function borrarSuperheroeIdController(req, res) {
    const { id } = req.params; //id a borrar

    try {
        const superheroeBorrado = await borrarSuperheroePorId(id);

        if (!superheroeBorrado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        // Devolver el superhéroe borrado
        res.status(200).json(superheroeBorrado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el superhéroe', error: error.message });
    }

    
}