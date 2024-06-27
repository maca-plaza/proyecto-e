import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../db/models/user.js';

const router = Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        user = new User({ name, lastName, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Usuario registrado correctamente.' });
    } catch (error) {
        console.error('Error en el registro:', error.message);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Credenciales incorrectas.' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error.message);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

export default router;
