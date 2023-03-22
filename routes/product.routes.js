const express = require('express');
const router = express.Router();
const productosController = require('../controllers/product.controller')


//obtener productos
router.get("/products",productosController.getProducts)


//Borrar producto
router.delete("/products",productosController.deleteProduct)

module.exports = router