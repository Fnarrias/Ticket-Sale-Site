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

    let flagSuma = false
    let indice = 0;
    let encontrado = -1;
    
    for (let i of doc_usuario.conciertoscomprados){
      if (i.conciertoID == conciertoID){ 
        encontrado = indice;
        flagSuma = true;
      }
      indice += 1;
    }

    console.log(doc_usuario);


    if(flagSuma === false){
    doc_usuario.conciertoscomprados.push(
      {
      sector: nombreSector, 
      cantidad: cantidad, 
      nombre: doc.nombre, 
      conciertoID: conciertoID}
      )
    }else{
      doc_usuario.conciertoscomprados.set(encontrado, 
        {
          sector: nombreSector, 
          cantidad: cantidad + 1, 
          nombre: doc.nombre, 
          conciertoID: conciertoID}
      )
    }



    await doc.save();
    await doc_usuario.save();

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = comprarEntrada;
