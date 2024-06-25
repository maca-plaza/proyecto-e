
import { Schema, model } from "mongoose";

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
});
const user = model("User", userSchema);

export default user;