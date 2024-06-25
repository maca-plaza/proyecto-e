const mongoose = require("mongoose");

const dbConnection = async () => {
  // intenta algo
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Base de datos conectada");

    // y si hay un error, capturalo
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnection };
