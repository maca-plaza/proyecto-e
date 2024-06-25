import express from 'express';
import auth from '../Middlewares/validar-jwt.js'; // Middleware para autenticación JWT
import User from '../db/models/user.js';
import Product from "../db/models/Product.js";

const router = express.Router();
// Configurar Express
router.post('/add', auth, async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id; // Desde el middleware de autenticación

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }

        // Verificar si el producto ya está en la wishlist
        if (user.wishlist.includes(productId)) {
            return res.status(400).json({ message: 'El producto ya está en la wishlist.' });
        }

        // Agregar producto a la wishlist del usuario
        user.wishlist.push(productId);
        await user.save();

        res.json({ message: 'Producto añadido a la wishlist correctamente.' });
    } catch (error) {
        console.error('Error al añadir producto a la wishlist:', error.message);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

// Obtener wishlist del usuario
router.get('/', auth, async (req, res) => {
    const userId = req.user.id; // Desde el middleware de autenticación

    try {
        const user = await User.findById(userId).populate('wishlist');
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        res.json(user.wishlist);
    } catch (error) {
        console.error('Error al obtener wishlist:', error.message);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

export default router;
