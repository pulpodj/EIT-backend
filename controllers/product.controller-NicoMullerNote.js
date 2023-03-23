const Product = require('../schemas/product.schema')


const getProducts = (req,res) => {
    Product.find().then(function(productos){        
        res.status(200).send({
            msg: 'Productos obtenidos correctamente',
            productos: productos
        });
    })
    
}

const getProduct = (req,res) => {
    Product.find().then(function(productos){        
        res.status(200).send({
            msg: 'Productos obtenidos correctamente',
            productos: productos
        });
    })
    
}

const addProduct = (req,res) => {
    const product = new Product(req.body)
    product.save().then(() => {
        res.status(200).send('Producto añadido correctamente');
    }).catch(error => {
        console.log(error)
        res.status(500).send('El producto no se pudo guardar');
    })
    
}

const deleteProduct = (req,res) => {
    const id = req.params.idProduct;
    Product.findByIdAndDelete(id)
    .then((deleted) => {
        if(!deleted){
            return res.status(404).send({mgr:'no se encontro el producto a borrar'});
            }

        return res.status(200).send({
            msg: 'Producto borrado correctamente',
            deleted
        })
    })
    .catch(error => {
        console.log(error);
        return res.status(500).send({
            msg: 'Error al borrar el producto'
        });
    })
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct
}