const express = require('express');
const app = express();
const productRouter = require ("./routes/product.routes")

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

 //Definir rutas a usar por mi app express
 app.use(productRouter) 


  module.exports = app