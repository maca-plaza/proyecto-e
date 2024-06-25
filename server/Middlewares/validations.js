import { check, validationResult } from "express-validator";

// Función para validar campos comunes
const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      msg: errors.array(),
    });
  }
  next();
};

// Configuración de validaciones comunes para email y password
const validarEmailPassword = [
  check("email", "El email es obligatorio").isEmail().not().isEmpty(),
  check("password", "La contraseña es obligatoria").not().isEmpty(),
];

// Middleware para validar registro
const validarRegistro = [
  ...validarEmailPassword,
  (req, res, next) => {
    next();
  },
  validarCampos,
];

// Middleware para validar login
const validarLogin = [
  ...validarEmailPassword,
  (req, res, next) => {
    next();
  },
  validarCampos,
];

// Middleware para validar Google
const validarGoogle = [
  check("token_gg", "El id_token es obligatorio").not().isEmpty(),
  validarCampos,
];

export  {
    validarRegistro,
    validarLogin,
    validarGoogle,
    validarCampos,
  };
  
