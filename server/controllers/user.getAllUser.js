
import response from '../res/response.js'
import User from "../db/models/user.js";

const listarUsuarios = async (req, res) => {

const usuarios = await User.find({});

const data = usuarios.map((user) => {
    return {
        id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
    }
});

    response(res, 200, data, "Usuarios listados con éxito")
}

export default listarUsuarios;