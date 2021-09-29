const { ConciertoModel } = require("../models/Concierto");

const conciertosPorGenero = async (req, res) => {
  try {
    const { nombreGenero } = req.params;
    const conciertos = await ConciertoModel.find();

    const conciertosDeGenero = conciertos.filter((element) =>
      element.artista.genero.includes(nombreGenero)
    );

    res.json(conciertosDeGenero);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = conciertosPorGenero;
