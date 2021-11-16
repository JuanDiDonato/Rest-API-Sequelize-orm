const bcrypt = require('bcrypt');
const helpers = {}

helpers.EncryptPassword = async data =>{
    //encripto el password 12 veces 
    const Salt = await bcrypt.genSalt(12)
    //obtengo la contraseña encriptada
    data.password = await bcrypt.hash(data.password, Salt)
    return data
}

helpers.MatchPassword = async (password, SavedPassword) => {
    //Compara la contraseña que puso el usuario con la de la base de datos
    return await bcrypt.compare(password, SavedPassword)
}

module.exports=helpers;