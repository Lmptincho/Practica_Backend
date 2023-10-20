const express = require('express');
const router = express.Router();
const personaControllers = require('../controllers/personaControllers');

// Rutas para la entidad "PERSONA"
router.post('/', personaControllers.createPersona);
router.get('/', personaControllers.getAllPersonas);
router.get('/:id', personaControllers.getPersonaById);
router.put('/:id', personaControllers.updatePersona);
router.delete('/:id', personaControllers.deletePersona);

// Rutas adicionales, como getByApellido
//router.get('/apellido/:apellido', personaControllers.getByApellido);

// Otras rutas relacionadas con personas, si es necesario

module.exports = router;