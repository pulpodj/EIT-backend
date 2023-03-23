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
    const id = req.query.id;

    if(!id){
        return res.status(400).send({
            msg: "Es necesario un id para buscar"
        })
    }

    Product.findById(id).then((product)=>{   
        
        if(!product){
            return res.status(404).send({
                msg: 'No se encontro el producto'
               }) 
        }
        res.status(200).send({
            msg: 'Productos obtenidos correctamente',
            producto: product
        });
    }).catch((error) => {

       return res.status(500).send({
        msg: 'No se pudo obtener el producto'
       }) 
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
    getProduct,
    addProduct,
    deleteProduct
}