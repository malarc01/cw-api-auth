const User = require('../models/user');

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

        // respond with token
        res.json({user:'created'})
    },
    signIn:async(req,res,next) =>{
        // generate token
        console.log('UsersController.signIn() called!')
    },
    secret:async(req,res,next) =>{
        console.log('UsersController.secret() called!')
    }
}