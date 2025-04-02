import { validationResult } from "express-validator";

export const manejarErroresDeValidacion = (req, res, next) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            estado: 'error',
            mensaje: 'Validación fallida',
            errores: errores.array().map(({ param, msg }) => ({
                campo: param,
                mensaje: msg
            }))
        });
    }

    next();
};