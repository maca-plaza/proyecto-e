
const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");
const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuario = require("../controllers/user.createUser.js");
const {login, googleLogin}= require('../controllers/login.user.js');
const isAuth = require('../middlewares/validar-jwt.js');
const logOut = require('../controllers/user.logOut.js');
const getUser = require('../controllers/user.getUser.js');
const { validarRegistro, validarLogin, validarGoogle } = require('../middlewares/validations.js');

//listar usuarios
router.get("/", listarUsuarios);

//crear usuario
router.post("/crear-usuario", validarRegistro, crearUsuario);

//login
router.post("/login", validarLogin, login);

//login google

router.post("/google-in", validarGoogle, googleLogin)

//get usuario
router.get("/get-usuario", isAuth, getUser);

//actualizar usuario
router.put("/actualizar-usuario/:id", actualizarUsuario);

//borrar usuario
router.delete("/eliminar-usuario", (req, res) => {
    res.send("Ruta DELETE gestionada");
});

router.get("/ruta-protegida", isAuth, (req, res) => {

    try {
        res.status(200).json({
        code: 200,
        msg: "Ruta protegida"
    })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            msg: "Error en el servidor"
        })
    }
   
}
);

router.post("/logout", logOut);


module.exports = router;