const { ConciertoModel } = require("../models/Concierto");

const comprarEntrada = async (req, res) => {
  try {
    const { conciertoID } = req.params;
    const { nombreSector, cantidad } = req.body;
    // recibir id de usuario como parametro

    const doc = await ConciertoModel.findById(conciertoID);

    for (let i of doc.recinto.sectores) {
      if (i.nombre === nombreSector) i.capacidad = i.capacidad - cantidad;
    }

    //agregar el concierto al usuario

    await doc.save();
    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = comprarEntrada;
