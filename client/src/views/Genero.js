import React from "react";
import ListaCabecera from "../components/ListaCabecera";



const Genero = () => {
   //Use effect que busca todos los generos y manda su info
   const generos = 
   [
     {Nombre: "nombre género",
      Descripcion: "leyenda de género",
      urlImagen: "url"
     },
     {Nombre: "nombre género",
      Descripcion: "leyenda de género",
      urlImagen: "url"
     }
   ]
  return (
    <div>
      <h1>genero</h1>
      <ListaCabecera listado={generos} titulo="Generos"/>
    </div>
  );
};

export default Genero;
