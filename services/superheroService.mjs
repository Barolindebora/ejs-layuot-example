import SuperHeroRepository from "../repositories/SuperHeroeRepository.mjs";
//utiliza los metodos del repositorio para buscar , filtrar, etc
 //separa los metodos del repositorio con el fin de que este solo se ocupe de la base de datos
export async function obtenerSuperheroesPorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function obtenerSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
    }

export async function crearSuperheroe(datosSuperheroe) {
    return await SuperHeroRepository.insertarSuperheroe(datosSuperheroe);
    }
 
export async function actualizarSuperheroePorNombre(nombreSuperheroe, nuevosDatos) {
        return await SuperHeroRepository.actualizarPorNombre(nombreSuperheroe, nuevosDatos);
    }
    
   
    export async function borrarSuperheroePorNombre(nombreSuperheroe) {
        return await SuperHeroRepository.borrarPorNombre(nombreSuperheroe);
    }
    export async function borrarSuperheroePorId(id) {
        return await SuperHeroRepository.borrarPorId(id);
    }