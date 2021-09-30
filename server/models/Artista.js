const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const ArtistaSchema = new Schema({
  nombre: {
    type: String,
  },
  genero: {
    type: Array,
  },
  minCapacidad: {
    type: Number,
  },
  urlImagen:{
    type: String
  }
});

const ArtistaModel = model(`artista`, ArtistaSchema);

module.exports = { ArtistaSchema, ArtistaModel };
