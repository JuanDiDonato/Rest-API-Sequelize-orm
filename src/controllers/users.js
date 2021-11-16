const {newUser, createToken} = require('../services/users')

userControllers = {}

// Register
userControllers.register = (req,res, next) => {
    const {username, password} = req.body;
    newUser({username,password}).then(user => res.status(201).send(user)).catch(next)
}

// login
userControllers.login = (req,res,next) => {
    if(req.isAuthenticated()){
        const {id} = req.user;
        try{
            const token = createToken(id)
            res.cookie('access_token', token, {httpOnly : true, sameSite : true})
            res.status(204).send()
        }catch(error){
            console.log(error);
        }
    }
}

module.exports=userControllers