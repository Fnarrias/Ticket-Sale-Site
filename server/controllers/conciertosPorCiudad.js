const { ConciertoModel } = require("../models/Concierto");

const conciertosPorCiudad = async (req, res) => {
  try {
    const { nombreCiudad } = req.params;
    const conciertos = await ConciertoModel.find();

    const conciertosDeCiudad = conciertos.filter(
      (element) => element.recinto.ciudad === nombreCiudad
    );

    res.json(conciertosDeCiudad);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = conciertosPorCiudad;
