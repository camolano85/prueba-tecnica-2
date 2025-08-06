const { Schema, model } = require('mongoose');

const DepartamentoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = model('Departamento', DepartamentoSchema);

