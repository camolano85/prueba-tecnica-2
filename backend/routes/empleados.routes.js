const express = require('express');
const router = express.Router();
const {
  obtenerEmpleados,
  obtenerEmpleado,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado
} = require('../controllers/empleado.controller');

const verificarToken = require('../middlewares/auth');

// Rutas protegidas
router.get('/', verificarToken, obtenerEmpleados);
router.get('/:id', verificarToken, obtenerEmpleado);
router.post('/', verificarToken, crearEmpleado);
router.put('/:id', verificarToken, actualizarEmpleado);
router.delete('/:id', verificarToken, eliminarEmpleado);

module.exports = router;

