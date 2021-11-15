const app = require('./app'); // Configuraciones

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`[+] Servidor iniciado en el puerto ${app.get('port')}`);
})