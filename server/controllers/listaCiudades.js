const { ConciertoModel } = require("../models/Concierto");

const listaCiudades = async (req, res) => {
  try {
    const conciertos = await ConciertoModel.find();

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }

    const arrayCiudades = [];

    for (let i of conciertos)
      arrayCiudades.push({
        ciudad: i.recinto.ciudad,
        nombre: i.recinto.nombre,
        urlImagen: i.recinto.urlImagen
      });

    const listaUnica = getUniqueListBy(arrayCiudades, "ciudad").map(
      (element) => ({ nombre: element.ciudad, urlImagen: element.urlImagen })
    );

    console.log(listaUnica);

    res.json(listaUnica);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = listaCiudades;
