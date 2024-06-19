
const { response } = require("express");
const User = require("../models/user.model.js");

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

module.exports = listarUsuarios;