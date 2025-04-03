import { body } from 'express-validator';

export const validarSuperheroe = () => [
    
    body('nombreSuperHeroe')
        .notEmpty().withMessage("Campo 'nombreSuperheroe' obligatorio.")//nombre obligatorio
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.')
        .trim(),// saca los espacios
    
    body('nombreReal')
        .notEmpty().withMessage("Campo 'nombreReal' obligatorio.")
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.')
        .trim(),
   
    body('edad')
        .notEmpty().withMessage("campo 'edad' obligatorio")
        .isInt({ min: 0 }).withMessage("Ingrese un número entero no negativo.") .trim(),

   
    body('poderes')
        .isArray({ min : 1,  }).withMessage('El poderes debe contener por lo menos un poder.')
        .custom( (poderes) => {
            for ( const poder of poderes ) {
                if ( typeof poder !== 'string' || poder.trim().length < 3 || poder.trim().length > 60 ) {
                    throw new Error("Cada poder debe ser una cadena de texto con una longitud entre 3 y 60 caracteres, sin espacios en blanco");
                }

                return true;
            }
        })
];
