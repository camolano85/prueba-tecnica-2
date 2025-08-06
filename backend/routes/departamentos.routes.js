const express = require('express');
const router = express.Router();

const {
  obtenerDepartamentos,
  obtenerDepartamento,
  crearDepartamento,
  actualizarDepartamento,
  eliminarDepartamento
} = require('../controllers/departamento.controller');

const verificarToken = require('../middlewares/auth');

router.get('/', verificarToken, obtenerDepartamentos);
router.get('/:id', verificarToken, obtenerDepartamento);
router.post('/', verificarToken, crearDepartamento);
router.put('/:id', verificarToken, actualizarDepartamento);
router.delete('/:id', verificarToken, eliminarDepartamento);

module.exports = router;


