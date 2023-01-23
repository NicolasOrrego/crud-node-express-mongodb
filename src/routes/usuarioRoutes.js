//* Importando el módulo de express
const express = require("express")

//* Creando una instancia router de express
const router = express.Router()

//* Importando los controladores del usuario
const usuarioController = require("../controllers/usuarioController");

//* Rutas del usuario
router
.post("/registrar", usuarioController.crearUsuario)

.get("/usuarios", usuarioController.verUsuarios)

.get("/ver/:correo", usuarioController.verUsuario)

.delete("/eliminar/:correo", usuarioController.eliminarUsuario)

.put("/actualizar/:correo", usuarioController.actualizarUsuario)

//* Exportando las rutas del usuario
module.exports = router;