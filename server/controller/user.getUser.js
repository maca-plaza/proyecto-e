const User = require("../models/user.model.js");
const response = require("../res/response.js");
const generarJWT = require("../services/generar-jwt.js");

const getUser = async (req, res) => { 

    const { user } = req;
    req.session.user = req.user || {};

    try {
        const userDB = await User.findById(user.idUser);

        const userDataToken = await generarJWT(userDB._id, userDB.name, userDB.lastName, userDB.email)

        res.status(200)
        .cookie('user', userDataToken, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 dias
        })
        .json({
            code: 200,
            data:{
                name: userDB.name,
                lastName: userDB.lastName,
                email: userDB.email
            }
        })

    } catch (error) {
        console.log(error);
        response(res, 500, null, "Error en el servidor")
    }

}

module.exports = getUser;
