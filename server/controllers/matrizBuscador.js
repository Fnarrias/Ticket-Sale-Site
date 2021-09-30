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

  for (i of artistasSet) doc.push({name:i, type:"artista"});
  for (i of generosSet) doc.push({name:i, type:"genero"});
  for (i of ciudadesSet) doc.push({name:i, type:"ciudad"});

  console.log(doc);

  if (!doc) return res.status(404).json({ message: "Usuario o password erróneos" })
  
  res.status(201).json(doc);

};

module.exports = matrizBuscador;
