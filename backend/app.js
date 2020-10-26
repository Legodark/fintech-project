const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')

dotenv.config()

const app = express()

// Configuración body-parser

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Importación de rutas

const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth')
const dashRoute = require('./routes/dashboard')
const restrichtArea = require('./middlewares/validate-token')

// Activación de las rutas

app.use('/', homeRoute)
app.use('/auth', authRoute)
app.use('/auth/dashboard', restrichtArea, dashRoute)

// Conexion a la base de datos

require('./modules/database')

module.exports = app
