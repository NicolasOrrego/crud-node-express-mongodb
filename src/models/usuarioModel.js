//* Importando Mongoose
const mongoose = require('mongoose')

//* Creando un esquema para el modelo de usuario
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

//* Exportando el modelo de usuario
module.exports = mongoose.model('Usuario', usuarioSchema)
