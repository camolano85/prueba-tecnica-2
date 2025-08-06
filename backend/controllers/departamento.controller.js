const Departamento = require('../models/departamento.model');

// GET - Obtener todos
const obtenerDepartamentos = async (req, res) => {
  const departamentos = await Departamento.find();
  res.json(departamentos);
};

// GET - Obtener uno
const obtenerDepartamento = async (req, res) => {
  const departamento = await Departamento.findById(req.params.id);
  res.json(departamento);
};

// POST - Crear
const crearDepartamento = async (req, res) => {
  const nuevoDepartamento = new Departamento(req.body);
  await nuevoDepartamento.save();
  res.json(nuevoDepartamento);
};

// PUT - Actualizar
const actualizarDepartamento = async (req, res) => {
  const actualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

// DELETE - Eliminar
const eliminarDepartamento = async (req, res) => {
  await Departamento.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Departamento eliminado' });
};

module.exports = {
  obtenerDepartamentos,
  obtenerDepartamento,
  crearDepartamento,
  actualizarDepartamento,
  eliminarDepartamento
};


