const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const LocalStrategy = require('passport-local')
const {JWT_SECRET} = require('./configuration')
const User = require('./models/user')

//JSON Web Token Strategy
passport.use(new JwtStrategy({
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:JWT_SECRET
},async(payload,done)=>{
    try{
        //find the user specified in token
        const user = await User.findById(payload.sub);
        // if user not exist, handle it
        if(!user){
            return done(null,false)
        }

        // otherwise return the user
        done(null,user)
    }
    catch(error){
        done(error,false)
    }
}))

//Local Strategy
passport.use(new LocalStrategy({
    
},async()=>{

}))