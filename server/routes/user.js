import { Router } from "express";
import listarUsuarios from "../controllers/user.getAllUser.js";
import actualizarUsuario from '../controllers/user.Update.js';
import crearUsuario from "../controllers/user.createUser.js";
import login from '../controllers/login.user.js';
import isAuth from '../middlewares/validar-jwt.js';
import logOut from '../controllers/user.logOut.js';
import getUser from '../controllers/user.getUser.js';
import { validarRegistro, validarLogin, validarGoogle} from '../Middlewares/validations.js';
const router = Router();

//listar usuarios
router.get("/", listarUsuarios);

//crear usuario
router.post("/crear-usuario", validarRegistro, crearUsuario);

//login
router.post("/login", validarLogin, login);

//login google

router.post("/google-in", validarGoogle)

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


export default router;