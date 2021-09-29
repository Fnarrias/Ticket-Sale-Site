import React from "react";
import ListaCabecera from "../components/ListaCabecera";

const Artistas = () => {

  //Use effect que busca todos artistas y manda su info
  const artistas = 
  [
    {Nombre: "nombre artista",
     Descripcion: "leyenda de artista",
     urlImagen: "url"
    },
    {Nombre: "nombre artista",
     Descripcion: "leyenda de artista",
     urlImagen: "url"
    }
  ]

  return (
    <div>
      <h1>Artistas</h1>
      <ListaCabecera listado={artistas} titulo="Artistas"/>
    </div>
  );
};

export default Artistas;
