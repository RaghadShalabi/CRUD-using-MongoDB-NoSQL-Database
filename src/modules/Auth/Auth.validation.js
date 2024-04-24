import joi from 'joi'

export const signupSchema = joi.object({
    username: joi.string().required().min(3).max(20),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(30).required(),
    age: joi.number().min(18).max(60),
    cPassword: joi.required().valid(joi.ref('password'))
})