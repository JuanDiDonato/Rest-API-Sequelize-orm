// Esquemas para validar los datos que ingresa el usuario
exports.createTask = {
    title : {
        in : ['body'], 
        exists : {
            errorMessage : 'El titulo no puede estar vacio.'
        }
    },
    description : {
        in : ['body'], 
        exists : {
            errorMessage : 'Ingrese una descripcion.'
        }
    }
}

exports.updateTask = {
    title : {
        in : ['body'], 
        exists : {
            errorMessage : 'El titulo no puede estar vacio.'
        }
    },
    description : {
        in : ['body'], 
        exists : {
            errorMessage : 'Ingrese una descripcion.'
        }
    }
}