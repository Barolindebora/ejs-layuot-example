import { body } from 'express-validator';

export const validarSuperheroe = () => [
    // nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
    body('nombreSuperheroe')
        .notEmpty().withMessage("Campo 'nombreSuperheroe' obligatorio.")
        .trim()
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.'),

    // nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
    body('nombreReal')
        .notEmpty().withMessage("Campo 'nombreReal' obligatorio.")
        .trim()
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.'),

    //  edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)
    body('edad')
        .notEmpty().withMessage("campo 'edad' obligatorio")
        .trim()
        .isInt({ min: 0 }).withMessage("Ingrese un número entero no negativo."),

    //  poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60
    body('poderes')
        .isArray({ min : 0,  }).withMessage('El poderes debe contener por lo menos un poder.')
        .custom( (poderes) => {
            for ( const poder of poderes ) {
                if ( typeof poder !== 'string' || poder.trim().length < 3 || poder.trim().length > 60 ) {
                    throw new Error("Cada poder debe ser una cadena de texto con una longitud entre 3 y 60 caracteres, sin espacios en blanco");
                }

                return true;
            }
        })
];
