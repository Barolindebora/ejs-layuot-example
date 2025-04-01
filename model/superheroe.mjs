import mongoose from 'mongoose'; 


const superheroeSchema=new mongoose.Schema({
    nombreSuperHeroe: {type: String, requiered: true},
    nombreReal: {type: String, requiered: true},
    edad: {type:Number, min:0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: [String], 
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type:Date, default: Date.now},
    creador: [String]
} 
);
 const superHero  =mongoose.model('SuperHero', superheroeSchema, 'Grupo-03');
 export default superHero;