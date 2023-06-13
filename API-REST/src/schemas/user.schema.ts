import joi, {Schema} from 'joi';

const userSchema:Schema = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    identification: joi.string().required(),
    age: joi.number().required(),
    cellphone: joi.string().required()
})

export {userSchema}