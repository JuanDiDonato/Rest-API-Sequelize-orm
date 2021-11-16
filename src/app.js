// Configuracioes del servidor
// Paquetes
const express = require('express');  // Express
const morgan = require('morgan');  // Morgan
const cookieParser = require('cookie-parser') // Cookie parser
const passport = require('passport') // Passport

const app = express();

// Middlewares
app.use(passport.initialize());
app.use(express.json());  // Admitir JSon
app.use(cookieParser())  // Permite cookies
app.use(morgan('dev'))  // Configuracion Morgan

// Servidor
app.set('port', 5000);  // Puerto

// Rutas
app.use('/test', require('./routes/tests'))
app.use('/user', require('./routes/users'))

module.exports = app