import SuperHero from '../model/superheroe.mjs';
import IRepository from './IRepository.mjs';
//implementa metodos definidos en la interfaz

class SuperHeroRepository extends IRepository{

    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find ({});
    }

    async buscarPorAtributo(atributo, valor){
      return await SuperHero.find({ [atributo]: valor });
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find( { $and : [
            { edad : { $gt : 30 } },
            { planetaOrigen : "Tierra" },
            { $expr: { $gt: [{ $size: "$poderes" }, 2] } } 
        ] } );
        
    }

    async insertarSuperheroe(nuevoSuperheroe) {
        const superheroe = new SuperHero(nuevoSuperheroe);
        return await superheroe.save();
    }
   
    async actualizarPorNombre(nombreSuperHeroe, nuevosDatos) {
        return await SuperHero.findOneAndUpdate(
                { nombreSuperHeroe: nombreSuperHeroe },
                nuevosDatos,
                { new: true } // Devuelve el superhéroe actualizado
            );
        } 

        async borrarPorNombre(nombreSuperHeroe) {
            return await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombreSuperHeroe });
           }
       
           async borrarPorId(id) {
            return await SuperHero.findByIdAndDelete(id);
           }
       
       
        }
    
        export default new SuperHeroRepository;
