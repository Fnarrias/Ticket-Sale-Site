const { ConciertoModel } = require("../models/Concierto");

const listaGeneros = async (req, res) => {
  try {
    const conciertos = await ConciertoModel.find();

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }

    const arrayGeneros = [];

    for (let i of conciertos) {
      for (let j of i.artista.genero) arrayGeneros.push(j);
    }

    const listaUnica = Array.from(new Set(arrayGeneros)).map((element) => ({
      nombre: element,
    }));

    res.json(listaUnica);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = listaGeneros;
