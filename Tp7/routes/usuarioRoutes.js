const express = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers');

// Rutas para la entidad "USUARIO"
router.post('/', usuarioControllers.createUser);
router.get('/', usuarioControllers.getAllUsers);
router.get('/:id', usuarioControllers.getUserById);
router.put('/:id', usuarioControllers.updateUser);
router.delete('/:id', usuarioControllers.deleteUser);

// Otras rutas relacionadas con usuarios, si es necesario

module.exports = router;