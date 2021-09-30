const { ConciertoModel } = require("../models/Concierto");
const { UserModel } = require("../models/User");

const comprarEntrada = async (req, res) => {
  try {
    const { conciertoID } = req.params;
    const { nombreSector, cantidad, _id } = req.body;
    // recibir id de usuario como parametro
    //console.log(_id)

    const doc = await ConciertoModel.findById(conciertoID);

    for (let i of doc.recinto.sectores) {
      if (i.nombre === nombreSector) i.capacidad = i.capacidad - cantidad;
    }

    //agregar el concierto al usuario
    const doc_usuario = await UserModel.findOne({_id: _id})
    
    doc_usuario.conciertoscomprados.push(
      {
      sector: nombreSector, 
      cantidad: cantidad, 
      nombre: doc.nombre, 
      conciertoID: conciertoID}
      );

    await doc.save();
    await doc_usuario.save();
    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = comprarEntrada;
