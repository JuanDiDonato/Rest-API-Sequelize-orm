// Esquemas para validar los datos que ingresa el usuario
exports.userSchema = {
    username : {
        in : ['body'], 
        exists : {
            errorMessage : 'El nombre de usuario no debe estar vacio.'
        }
    },
    password : {
        in : ['body'], 
        exists : {
            errorMessage : 'La contraseña no debe estar vacia.'
        }
    }
}