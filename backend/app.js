const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const bearerToken = require('express-bearer-token')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(bearerToken())
app.use(cors())

// Configuración body-parser

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Importación de rutas

const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth')
const dashRoute = require('./routes/dashboard')
const movesRoute = require('./routes/moves')

// Activación de las rutas

app.use('/', homeRoute)
app.use('/auth', authRoute)
app.use('/dashboard', dashRoute)
app.use('/moves', movesRoute)

// Conexion a la base de datos

require('./modules/database')

module.exports = app
