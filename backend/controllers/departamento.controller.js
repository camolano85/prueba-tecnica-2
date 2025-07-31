const Departamento = require('../models/departamento.model');

// Obtener todos los departamentos
const obtenerDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener departamentos', error });
  }
};

// Obtener un departamento por ID
const obtenerDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.findById(req.params.id);
    if (!departamento) {
      return res.status(404).json({ mensaje: 'Departamento no encontrado' });
    }
    res.json(departamento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener departamento', error });
  }
};

// Crear nuevo departamento
const crearDepartamento = async (req, res) => {
  try {
    const nuevo = new Departamento(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear departamento', error });
  }
};

// Actualizar departamento
const actualizarDepartamento = async (req, res) => {
  try {
    const actualizado = await Departamento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!actualizado) {
      return res.status(404).json({ mensaje: 'Departamento no encontrado' });
    }
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar departamento', error });
  }
};

// Eliminar departamento
const eliminarDepartamento = async (req, res) => {
  try {
    const eliminado = await Departamento.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Departamento no encontrado' });
    }
    res.json({ mensaje: 'Departamento eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar departamento', error });
  }
};

module.exports = {
  obtenerDepartamentos,
  obtenerDepartamento,
  crearDepartamento,
  actualizarDepartamento,
  eliminarDepartamento
};
