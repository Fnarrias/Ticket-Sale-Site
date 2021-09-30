const { ConciertoModel } = require("../models/Concierto");
const { ArtistaModel } = require("../models/Artista");
const { RecintoModel } = require("../models/Recinto");

const crearConcierto = async (req, res) => {
  try {
    const {
      nombre,
      nombreArtista,
      nombreRecinto,
      fecha,
      descripción,
      precios,
      urlImagen
    } = req.body;

    const docArtista = await ArtistaModel.find({ nombre: nombreArtista });
    if (!docArtista)
      throw new Error("el artista ingresado no existe en la base de datos");

    const artistaNombre = docArtista[0].nombre;
    const artistaGenero = docArtista[0].genero;
    const artistaMinCapacidad = docArtista[0].minCapacidad;
    const artistaUrlImagen = docArtista[0].urlImagen

    const docRecinto = await RecintoModel.find({ nombre: nombreRecinto });
    if (!docRecinto)
      throw new Error("el recinto ingresado no existe en la base de datos");

    const recintoNombre = docRecinto[0].nombre;
    const recintoCiudad = docRecinto[0].ciudad;
    const recintoSectores = docRecinto[0].sectores;
    const recintoCapacidadTotal = docRecinto[0].capacidadTotal;
    const recintoUrlImagen = docRecinto[0].urlImagen;

    for (let i of recintoSectores) {
      for (let j of precios) {
        if (j.nombre === i.nombre) i["precio"] = j.precio;
      }
    }

    const doc = await new ConciertoModel({
      nombre,
      artista: {
        nombre: artistaNombre,
        genero: artistaGenero,
        minCapacidad: artistaMinCapacidad,
        urlImagen: artistaUrlImagen
      },
      recinto: {
        nombre: recintoNombre,
        ciudad: recintoCiudad,
        sectores: recintoSectores,
        capacidadTotal: recintoCapacidadTotal,
        urlImagen: recintoUrlImagen
      },
      fecha,
      descripción,
      urlImagen
    });

    await ConciertoModel.collection.dropIndexes();
    await doc.save();

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = crearConcierto;
