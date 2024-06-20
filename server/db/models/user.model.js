
const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

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