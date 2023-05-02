const mongoose = require('mongoose');

const {Schema} = mongoose;

const doctorSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    consultorio: {
        type: Number,
        require: true
    },
    specialty: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('userDoctors', doctorSchema)