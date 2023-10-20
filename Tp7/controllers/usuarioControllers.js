const Usuario = require('../models/usuarioModel'); // Importa el modelo de usuario




// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id },
    });
    if (updated) {
      const usuario = await Usuario.findByPk(id);
      return res.json(usuario);
    }
    return res.status(404).json({ error: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

