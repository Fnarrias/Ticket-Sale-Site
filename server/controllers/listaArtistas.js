const { ConciertoModel } = require("../models/Concierto");

const listaArtistas = async (req, res) => {
  try {
    const conciertos = await ConciertoModel.find();

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }

    const arrayArtistas = [];

    for (let i of conciertos)
      arrayArtistas.push({
        nombre: i.artista.nombre,
        minCapacidad: i.artista.minCapacidad,
        urlImagen: i.artista.urlImagen
      });

    const listaUnica = getUniqueListBy(arrayArtistas, "nombre");

    console.log(listaUnica);

    res.json(listaUnica);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = listaArtistas;
