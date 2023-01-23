//* Importando el módulo de express
const express = require('express')

//* Importando la configuración de las variables de entorno
require('dotenv').config()

//* Importando la conexión a la base de datos
require('./src/database/db')

//* Importando las rutas del usuario
const usuarioRoutes = require('./src/routes/usuarioRoutes');

//* Creando una instancia de la aplicación express
const app = express()

//* Configurando la aplicación para manejar solicitudes HTTP con cuerpos en formato JSON
app.use(express.json())

//* Configurando la aplicación para manejar solicitudes HTTP con cuerpos en formato "url encoded"
app.use(express.urlencoded({ extended: true }))

//* Agregar las rutas de usuario a la aplicación
app.use("/api/usuarios", usuarioRoutes);

//* Estableciendo el puerto en el que la aplicación escuchará solicitudes HTTP
const port = process.env.PORT || 3001

//* Iniciando el servidor de la aplicación y escuchando en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
})

