//* Importando el modelo de usuario
const usuarioModel = require("../models/usuarioModel")

//* Importando bcrypt para encriptar contraseñas
const bcrypt = require("bcrypt")

//* Función para crear un nuevo usuario
const crearUsuario = async (nombre, correo, password) => {

    //* Validacion de datos
    if (!nombre || !correo || !password) {
        throw new Error('Todos los campos son obligatorios');
    }

    //* Verifica si el email ya existe en la base de datos
    const usuarioExistente = await usuarioModel.findOne({ correo })
    if (usuarioExistente) {
        throw new Error('El correo electrónico ya está en uso');
    }

    //* Creacion del nuevo objeto de usuario
    const newUser = new usuarioModel({
        nombre,
        correo,
        password
    })
    
    //* Encriptar la contraseña
    newUser.password = await bcrypt.hash(password, 10);

    //* Guarda el usuario en la base de datos
    const usuario = await usuarioModel.create(newUser);
    return usuario
}

//* Función para ver todos los usuarios
const verUsuarios = async () => {
    try {

        //* Buscar todos los usuarios en la base de datos
        const usuarios = await usuarioModel.find({});

        //* Si no se encuentran usuarios, lanzar un error
        if (!usuarios) throw new Error("No se encontraron usuarios");

        //* Retornar la lista de usuarios
        return usuarios;
    } catch (error) {
        throw error
    }
}

//* Función para ver un usuario específico
const verUsuario = async (correo) => {
    try {

        //* Buscar el usuario en la base de datos con el correo especificado
        const usuario = await usuarioModel.findOne({ correo })

        //* Si no se encuentra el usuario, lanzar un error
        if (!usuario) throw new Error("Usuario no encontrado")

        //* Retornar el usuario encontrado
        return usuario;
    } catch (error) {
        throw error
    }
}

//* Función para actualizar un usuario
const actualizarUsuario = async (correo, updates) => {
    try {

        //* Buscar el usuario en la base de datos con el correo especificado
        const usuario = await usuarioModel.findOneAndUpdate({ correo }, updates, { new: true })

        //* Si no se encuentra el usuario, lanzar un error
        if (!usuario) throw new Error("Usuario no encontrado")

        //* Retornar el usuario actualizado
        return usuario;
    } catch (error) {
        throw error
    }
}

//* Función para eliminar un usuario
const eliminarUsuario = async (correo) => {
    try {

        //* Buscar el usuario en la base de datos con el correo especificado
        const usuario = await usuarioModel.findOne({ correo })

        //* Si no se encuentra el usuario, lanzar un error
        if (!usuario) throw new Error("Usuario no encontrado")

        //* Eliminar el usuario encontrado
        await usuario.remove();
    } catch (error) {
        throw error
    }
}

//* Exportando las funciones de servicio de usuarios
module.exports = {
    crearUsuario,
    verUsuarios,
    verUsuario,
    eliminarUsuario,
    actualizarUsuario
}