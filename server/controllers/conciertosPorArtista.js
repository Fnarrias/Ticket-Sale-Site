const { ConciertoModel } = require("../models/Concierto");

const conciertosPorArtista = async (req, res) => {
  try {
    const { nombreArtista } = req.params;
    const conciertos = await ConciertoModel.find();

    const conciertosDeArtista = conciertos.filter(
      (element) => element.artista.nombre === nombreArtista
    );

    res.json(conciertosDeArtista);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = conciertosPorArtista;
