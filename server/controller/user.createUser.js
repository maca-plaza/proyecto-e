const User = require("../db/models/user.model.js");
const bcrypt = require("bcrypt");
const response = require("../res/response.js");


const crearUsuario = async (req, res) => {
  try {
    const { name, lastName, email, password, rut, google } = req.body;
    const newUser = new User({ name, lastName, email, password, rut, google });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

module.exports = crearUsuario;