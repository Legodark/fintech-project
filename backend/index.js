const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 8084
const app = express()

// Importación de rutas

const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth')

// Activación de las rutas

app.use('/', homeRoute)
app.use('/auth/login', authRoute)

// Conexion a la base de datos

require('./modules/database')

// Arrancamos el servidor

app.listen(PORT, () => {

  console.log(`El servidor se ha iniciado en el puerto ${PORT}`);
  console.log(`Puedes acceder desde la siguiente dirección: http://localhost:${PORT}`);

})