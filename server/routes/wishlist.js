// Importar Express y MongoDB
const express = require('express');
const mongoose = require('mongoose');

// Configurar Express
const app = express();
app.use(express.json());

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    imagen: String
});

// Definir el modelo de los productos
const Producto = mongoose.model('Producto', productoSchema);

// Ruta para obtener la wishlist de un usuario
app.get('/wishlist/:usuarioId', async (req, res) => {
    const usuarioId = req.params.usuarioId;
    try {
        const wishlist = await Producto.find({ usuario: usuarioId });
        res.json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para agregar un producto a la wishlist
app.post('/wishlist/:usuarioId/agregar', async (req, res) => {
    const usuarioId = req.params.usuarioId;
    const { nombre, precio, imagen } = req.body;
    try {
        const producto = new Producto({ nombre, precio, imagen, usuario: usuarioId });
        await producto.save();
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un producto de la wishlist
app.delete('/wishlist/:usuarioId/eliminar/:productoId', async (req, res) => {
    const usuarioId = req.params.usuarioId;
    const productoId = req.params.productoId;
    try {
        await Producto.findOneAndDelete({ _id: productoId, usuario: usuarioId });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});