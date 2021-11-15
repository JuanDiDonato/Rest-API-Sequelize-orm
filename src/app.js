// Configuracioes del servidor
// Paquetes
const express = require('express');  // Express
const morgan = require('morgan');  // Morgan

const app = express();


// Middlewares
app.use(express.json());  // Admitir JSon
app.use(morgan('dev'))  // Configuracion Morgan

// Servidor
app.set('port', 5000);  // Puerto

// Rutas
app.use('/test', require('./routes/tests_routes'))

module.exports = app