const mongoose = require('mongoose');


module.exports = () =>
    mongoose.connect('mongodb+srv://root:Andres20@pruebas.7h3izyl.mongodb.net/?retryWrites=true&w=majority');