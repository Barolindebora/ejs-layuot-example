import { body } from 'express-validator';

export const validarSuperheroe = [
    body('nombreSuperheroe')
        .trim()
        .notEmpty().withMessage('El nombre del superhéroe es obligatorio')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres'),
    
    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre real es obligatorio')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),
    
    body('edad')
        .notEmpty().withMessage('La edad es obligatoria')
        .isNumeric().withMessage('La edad debe ser un número')
        .custom(value => value >= 0).withMessage('La edad no puede ser negativa'),
    
    body('poderes')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un poder')
        .custom(poderes => poderes.every(p => typeof p === 'string' && p.trim().length >= 3 && p.trim().length <= 60))
        .withMessage('Cada poder debe tener entre 3 y 60 caracteres sin espacios en blanco')
];
