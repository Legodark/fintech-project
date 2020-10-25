const express = require('express')
const dotenv = require('dotenv')
const homeRoute = require('./routes/home')

dotenv.config()

const PORT = process.env.PORT || 8084
const app = express()


// Importación de rutas

app.use('/', homeRoute)

// Arrancamos el servidor

app.listen(PORT, () => {

  console.log(`El servidor se ha iniciado en el puerto ${PORT}`);

})