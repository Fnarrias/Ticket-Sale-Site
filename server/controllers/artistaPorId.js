const { ArtistaModel } = require("../models/Artista");

const artistaPorId = async (req, res) => {
  try {
    const { _id } = req.params;
    const artista = await ArtistaModel.findById(_id);

    res.json(artista);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = artistaPorId;
