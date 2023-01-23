//* Importar mongoose
const mongoose = require('mongoose')

//* Leer la variable de entorno con la URL de conexion a la base de datos
const URI = process.env.MONGO_URI

//* Conectar a la base de datos
mongoose.set('strictQuery', false)
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexion exitosa a la base de datos'))
.catch(error => console.log('Error al conectarse a la base de datos: ',error))

//* Exportar db
module.exports = mongoose