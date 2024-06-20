const User = require("../models/user.model.js");
const response = require("../res/response.js");

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  // tomamos el id para buscar en la base de datos a ese usuario

  if (!id) {
    return response(res, 400, null, "El ID es requerido");
  }

  if (id.length !== 24) {
    return response(res, 400, null, "El ID no es válido");
  }

  if(!name || !lastName) {
    return response(res, 400, null, "El nombre y apellido son requeridos");
  }

  const userChanges = {
    name: name,
    lastName: lastName,
  };

  try {
    await User.findByIdAndUpdate(id, userChanges);

    response(res, 200, null, "Usuario actualizado con éxito");  
  } catch (error) {
    response(res, 500, null, "Error en el servidor");
    console.log(error);
  }
};

module.exports = actualizarUsuario;
