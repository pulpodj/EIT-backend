
const port = 13000
const dbURL = 'mongodb+srv://pulpodj:B0b9xS88uUtefcoy@cluster0.dzcqr7g.mongodb.net/?retryWrites=true&w=majority'
const app = require('./app')
const mongoose = require('mongoose');

mongoose.connect(dbURL)
  .then(()=>{
      console.log(`\x1b[35m conexion db exitosa \x1b[37m`)
      //pongo en marcha el server
      app.listen(port, () => {
        console.log(` Servidor funcionando en puerto ${port} `)
          })
    })
    .catch((error)=>{
    console.log(error)
    })



// app.listen(port, () => {
//   console.log(`Servidor funcionando en puerto ${port}`)
// })