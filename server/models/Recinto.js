const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const SectorSchema = require(`./Sector`);

const RecintoSchema = new Schema({
  nombre: {
    type: String,
  },
  ciudad: {
    type: String,
  },

  sectores: [SectorSchema],

  capacidadTotal: {
    type: Number,
  },
});

const RecintoModel = model(`recinto`, RecintoSchema);

module.exports = { RecintoSchema, RecintoModel };
