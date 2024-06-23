const { validationResult } = require('express-validator');

const validarRegistro = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('lastName').notEmpty().withMessage('El apellido es requerido'),
    body('email').isEmail().withMessage('El email no es válido'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

const validarLogin = [
    body('email').notEmpty().withMessage('El email es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
];


module.exports = { validarRegistro, validarLogin};