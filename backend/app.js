const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(cors())

// Configuración body-parser

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Importación de rutas

const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth')
const dashRoute = require('./routes/dashboard')
const movesRoute = require('./routes/moves')
const restrictArea = require('./middlewares/validate-token')

// Activación de las rutas

app.use('/', homeRoute)
app.use('/auth', authRoute)
app.use('/auth/dashboard', restrictArea, dashRoute)
app.use('/moves', restrictArea, movesRoute)

// Conexion a la base de datos

require('./modules/database')

module.exports = app
