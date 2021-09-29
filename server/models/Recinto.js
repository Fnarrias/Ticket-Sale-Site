const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const SectorSchema = require(`./Sector`);

const RecintoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Debes ingresar el nombre del Recinto"],
  },
  ciudad: {
    type: String,
    required: [true, "Debes ingresar la ciudad del Recinto"],
  },

  sectores: [SectorSchema],

  capacidadTotal: {
    type: Number,
  },
});

const RecintoModel = model(`recinto`, RecintoSchema);

module.exports = { RecintoSchema, RecintoModel };
