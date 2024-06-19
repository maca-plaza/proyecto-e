
const logOut = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
          // manejar error
          console.log(err);
        }
    })

    res.clearCookie("token")
    .clearCookie("user_session")
    .status(200)
    .json({
        msg: "Sesión cerrada con éxito",
        code: 200
    });

    }

module.exports = logOut;