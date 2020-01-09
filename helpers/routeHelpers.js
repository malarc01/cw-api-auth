const Joi = require('@hapi/joi')
const authSchema = Joi.object({ 
        
    email: Joi.string().required() .email(),
    password: Joi.string().required() })
    
    // const validation = authSchema.validate(req.body);
    // res.send(validation);
module.exports ={

    schemas:{
        //works
        // authSchema: Joi.object({
        //     email: Joi.string().email().required(),
        //     password:Joi.string().required()
        // })
        //might work
        authSchema: Joi.object().keys({
            email:Joi.string().email().required(),
            password:Joi.string().required()
        })
    },
    validateBody: (schema) =>{
        return(req,res,next) =>{
            // const result = Joi.validate(req.body,schema);
            // const validation = schema.validate(req.body);
            // const validation = schema.validate(req.body);
            const result = authSchema.validate(req.body)
            if(result.error){
                console.log(req.body)
                return res.status(400).json(result.error);
            }
            // req.value.body instead req.body
            if(!req.value){
                req.value ={};
            }
            req.value['body'] = result.value;
            next()
        }
    },
    
    
}
 