const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const response = require("../res/response.js");

const crearUsuario = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  //agregar un paso para poder encriptar la contraseña
  const salt = bcrypt.genSaltSync();
  const passwordEncripted = bcrypt.hashSync(password, salt);

  try {
    const checkPreviousUser = await User.findOne({ email: email });

    if (checkPreviousUser) {
      return response(res, 400, null, "El email ya está registrado");
    }

    const user = await User.create({
      name: name,
      lastName: lastName,
      email: email,
      password: passwordEncripted,
    });

    response(res, 201, user._id, "Usuario creado con éxito");
  } catch {
    response(res, 500, null, "Error en el servidor");
    console.log(error);
  }
};

module.exports = crearUsuario;
