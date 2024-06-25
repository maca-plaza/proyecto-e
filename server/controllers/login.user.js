import User from "../db/models/user.js";
import bcrypt from 'bcrypt';
import generarJWT from '../services/generar-jwt.js';
import response from "../res/response.js";



const login = async (req, res) => {

    const { email, password } = req.body;
    try {
   // verificar que el usuario exista en la base de datos
const user = await User.findOne({email: email})

if(!user) {
    return response(res, 400, null, "Usuario no encontrado")
}

   //verificar que la contraseña sea correcta

   //agregar un paso para poder verificar la contraseña encriptada

const passwordVerified = bcrypt.compareSync(password, user.password)


if(!passwordVerified) {
    return response(res, 400, null, "Contraseña incorrecta")
}

const token = await generarJWT(user._id);

res.status(200)
.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 dias,
})
.json({
code: 200,
msg: "Usuario logueado con éxito",
})

    }
    catch (error) {
        console.log(error);
        response(res, 500, null, "Error en el servidor")
    }
}





export default login;