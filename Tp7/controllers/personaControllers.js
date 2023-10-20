const Persona = require('../models/personaModel'); // Importa el modelo de persona

// Crear una nueva persona
const createPersona = async (req, res) => {
  try {
    const persona = await Persona.create(req.body);
    return res.status(201).json(persona);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Obtener todas las personas
const getAllPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    return res.json(personas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Obtener una persona por ID
const getPersonaById = async (req, res) => {
  const { id } = req.params;
  try {
    const persona = await Persona.findByPk(id);
    if (!persona) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
    return res.json(persona);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Actualizar una persona por ID
const updatePersona = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Persona.update(req.body, {
      where: { id },
    });
    if (updated) {
      const persona = await Persona.findByPk(id);
      return res.json(persona);
    }
    return res.status(404).json({ error: 'Persona no encontrada' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Eliminar una persona por ID
const deletePersona = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Persona.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: 'Persona no encontrada' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPersona,
  getAllPersonas,
  getPersonaById,
  updatePersona,
  deletePersona,
};