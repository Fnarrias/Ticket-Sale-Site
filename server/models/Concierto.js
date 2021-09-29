const ArtistaSchema = require(`./Artista`).ArtistaSchema;
const RecintoSchema = require(`./Recinto`).RecintoSchema;

const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const ConciertoSchema = new Schema({
  nombre: String,
  artista: ArtistaSchema,
  recinto: RecintoSchema,
  fecha: Date,
  descripción: String,
});

const ConciertoModel = model(`concierto`, ConciertoSchema);

module.exports = { ConciertoSchema, ConciertoModel };
