// Packages

//Model user
const {Users} = require('./models')

// Passport, local and jwt
const passport = require('passport');  
LocalStrategy = require('passport-local').Strategy;
JwtStrategy = require('passport-jwt').Strategy;

//Services
const {MatchPassword} = require('./helpers/bcrypt')
 
// Get cookie
const cookieExtractor = req => {
    let token = null
    if(req && req.cookies) token = req.cookies['access_token']
    return token
}

// Passport local strategy
passport.use(new LocalStrategy({
    'usernameField' : 'username',
    'passwordField' : 'password',

},async (username, password, done) => {
    const user = await Users.findOne({where : {username:username}})
    if(!user) return done(error, false, null)
    else{
        MatchPassword(password,user.password).then(data => {
            if(data) return done(false,user,null)
            else return done(error, false, null)
        })
    }
}))

// Passport jwt strategy
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'm1ch1'
},(payload, done) => {
    Users.findOne({where : {id : [payload.sub]}}).then(user => done(null,user))
    .catch(error => done(error,false))
}))


 

