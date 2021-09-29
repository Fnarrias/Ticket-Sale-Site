const mongoose = require(`mongoose`);
const { Schema } = mongoose;

const SectorSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "cada sector debe tener un nombre"],
  },
  capacidad: {
    type: Number,
    required: [true, "debes ingresar la capacidad de cada sector"],
    min: 0,
  },
  precio: {
    type: Number,
  },
});

module.exports = SectorSchema;
