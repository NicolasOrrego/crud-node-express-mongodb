//* Importando el servicio de usuario
const usuarioService = require('../service/usuarioService')

//* Registrar un usuario utilizando el servicio de usuario
const crearUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.crearUsuario(req.body.nombre, req.body.correo, req.body.password)

        //* Envía una respuesta exitosa con el mensaje de éxito y los detalles del usuario creado
        res.json({ message: "Usuario registrado exitosamente", usuario })
    } catch (error) {

        //* Envía una respuesta de error con el mensaje de error
        res.status(400).json({ message: error.message })
    }
}

//* Obtiene la lista de todos los usuarios utilizando el servicio de usuario
const verUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.verUsuarios()

        //* Envía una respuesta exitosa con la lista de usuarios
        res.status(200).json({
            message: "Usuarios encontrados",
            usuarios,
        })
    } catch (error) {

        //* Envía una respuesta de error con el mensaje de error
        res.status(404).json({
            message: error.message,
        })
    }
}

//* Buscar un usuario específico utilizando el servicio de usuario
const verUsuario = async (req, res) => {
    try {

        //* Obtener el correo del usuario desde los parámetros de la ruta
        const { correo } = req.params
        
        //* Buscar el usuario específico en la base de datos utilizando el servicio de usuario
        const usuario = await usuarioService.verUsuario(correo)

        //* Envia una respuesta exitosa con el usuario encontrado
        res.status(200).json({
            message: "Usuario encontrado",
            usuario,
        })
    } catch (error) {

        //* Envia una respuesta de error con el mensaje de error específico
        res.status(404).json({
            message: error.message,
        })
    }
}

//* Actualizar el usuario específico utilizado el servicio de usuario
const actualizarUsuario = async (req, res) => {
    try {

        //* Obtener el correo del usuario desde los parámetros de la ruta
        const { correo } = req.params

        //* Obtener los datos a actualizar desde el cuerpo de la petición
        const updates = req.body

        //* Actualizar el usuario específico en la base de datos utilizando el servicio de usuario
        const usuario = await usuarioService.actualizarUsuario(correo, updates)

        //* Envia una respuesta exitosa con el usuario actualizado
        res.status(200).json({
            message: "Usuario actualizado",
            usuario,
        })
    } catch (error) {

        //* Envia una respuesta de error con el mensaje de error específico
        res.status(404).json({
            message: error.message,
        })
    }
}

//* Eliminar el usuario específico utilizado el servicio de usuario
const eliminarUsuario = async (req, res) => {
    try {

        //* Obtener el correo del usuario desde los parámetros de la ruta
        const { correo } = req.params

        //* Eliminar el usuario específico en la base de datos utilizando el servicio de usuario
        await usuarioService.eliminarUsuario(correo)

        //* Envia una respuesta exitosa con el usuario eliminado
        res.status(200).json({
            message: "Usuario eliminado exitosamente"
        });
    } catch (error) {

        //* Envia una respuesta de error con el mensaje de error específico
        res.status(404).json({
            message: error.message,
        })
    }
}

//* Exportando los controladores de usuarios
module.exports = {
    crearUsuario,
    verUsuarios,
    verUsuario,
    actualizarUsuario,
    eliminarUsuario,
}



