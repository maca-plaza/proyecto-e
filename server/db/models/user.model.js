
const mongoose = require("mongoose");

// schema
const userSchema = new Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default: "123456789"
    },
    rut: String,
    google: Boolean
})

// modelo
const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@energizatech.iepoih0.mongodb.net/energizatech`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;