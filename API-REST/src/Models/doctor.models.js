const mongoose = require('mongoose');

const {Schema} = mongoose;

const doctorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('userDoctors', doctorSchema)