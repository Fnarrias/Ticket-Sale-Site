const { RecintoModel } = require("../models/Recinto");

const crearRecinto = async (req, res) => {
  try {
    const { nombre, ciudad, sectores } = req.body;

    let capacidadTotal = 0;

    for (i of sectores) {
      capacidadTotal = capacidadTotal + i.capacidad;
    }

    const doc = await new RecintoModel({
      nombre,
      ciudad,
      sectores,
      capacidadTotal,
    });

    await doc.save();

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = crearRecinto;
