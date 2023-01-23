//* Importando Mongoose
const mongoose = require('mongoose')

//* Leyendo la variable de entorno con la URL de conexión a la base de datos
const URI = process.env.MONGO_URI

//* Conectando a la base de datos
mongoose.set('strictQuery', false)
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(error => console.log('Error al conectarse a la base de datos: ',error))

//* Exportando la conexión a la base de datos
module.exports = mongoose
