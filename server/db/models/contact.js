import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    email: {
        type: String,
        required: [true, 'El correo es requerido'],
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Por favor, ingrese un correo válido']
    },
    comment: {
        type: String,
        required: [true, 'El comentario es requerido'],
        trim: true
    }
});

const Contact = model('Contact', contactSchema);

export default Contact;