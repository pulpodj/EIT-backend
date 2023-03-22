const Product = require('../schemas/product.schema')


const getProducts = (req,res) => {
    Product.find().then(function(productos){        
        res.status(200).send({
            msg: 'Productos obtenidos correctamente',
            productos: productos
        });
    })
    
}

const deleteProduct = (req,res) => {
    res.status(200).send('Producto borrado correctamente')
}

module.exports = {
    getProducts,
    deleteProduct
}