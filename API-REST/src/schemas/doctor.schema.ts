import joi from 'joi';
const schemaDoctor = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    email: joi.string().email(),
    consultorio: joi.number(),
    specialty: joi.string()
})

export {schemaDoctor}