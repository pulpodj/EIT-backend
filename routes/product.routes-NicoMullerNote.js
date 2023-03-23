const express = require('express');
const router = express.Router();
const productosController = require('../controllers/product.controller')


//obtener productos
router.get("/products",productosController.getProducts)

//obtener producto en particular
router.get("/product/:idProduct",productosController.getProduct)

//obtener productos
router.post("/product",productosController.addProduct)

//Borrar producto
router.delete("/product/:idProduct",productosController.deleteProduct)

module.exports = router