const { ArtistaModel } = require("../models/Artista");

const crearArtista = async (req, res) => {
  try {
    const { nombre, genero, minCapacidad, urlImagen } = req.body;

    console.log(nombre);

    const doc = await new ArtistaModel({
      nombre,
      genero,
      minCapacidad,
      urlImagen
    });

    await doc.save();

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = crearArtista;
