
const JWT = require('jsonwebtoken')
const User = require('../models/user');
const {JWT_SECRET} = require('../configuration/')
signToken= (user)=>{
    return JWT.sign({
        iss:'malarc01',
        sub:user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1) // current time + 1 day ahead

    },JWT_SECRET); 
}

module.exports ={
    signUp:async(req,res,next) =>{
        // email & password
        // req.value.body
        console.log('contents of req.value.body',req.value.body)
        console.log('UsersController.signUp() called!')


        const {email,password} = req.value.body
        // check is user already exist with email input
        const foundUser = await User.findOne({email:email});
        if(foundUser){return res.status(403).send({error:'Email is already in use'})}



        // create new user
        const newUser = new User({
            email:email,
            password: password
        })
        await newUser.save();

        // res.json({user:'created'})
        
        // generate the token
        const token = signToken(newUser)

        // respond with token
        res.status(200).json({token:token});


    },
    signIn:async(req,res,next) =>{


        // generate token
        console.log('UsersController.signIn() called!')
    },
    secret:async(req,res,next) =>{
        console.log('UsersController.secret() called!')
    }
}