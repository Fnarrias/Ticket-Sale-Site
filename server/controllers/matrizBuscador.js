const { ArtistaModel } = require("../models/Artista");
const { RecintoModel } = require("../models/Recinto");

const matrizBuscador = async (req, res) => {
  const todosArtistas = await ArtistaModel.find();
  const todosRecintos = await RecintoModel.find();

  let tempArtistas = [];
  let tempGeneros = [];
  let tempCiudades = [];
  const doc = [];

  for (let i of todosArtistas) {
    tempArtistas.push(i.nombre);

    for (let j of i.genero) tempGeneros.push(j);
  }

  for (let i of todosRecintos) tempCiudades.push(i.ciudad);

  const artistasSet = Array.from(new Set(tempArtistas));
  const generosSet = Array.from(new Set(tempGeneros));
  const ciudadesSet = Array.from(new Set(tempCiudades));

  for (i of artistasSet) doc.push([i, "artista"]);
  for (i of generosSet) doc.push([i, "genero"]);
  for (i of ciudadesSet) doc.push([i, "ciudad"]);

  console.log(doc);
};

module.exports = matrizBuscador;
