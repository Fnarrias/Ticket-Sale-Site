import React from 'react';
import ListaCabecera from "../components/ListaCabecera";

const Ciudades = () => {
 //Use effect que busca todas las ciudades con concierto y manda su info
 const ciudades = 
 [
   {Nombre: "nombre ciudad",
    Descripcion: "leyenda de ciudad",
    urlImagen: "url"
   },
   {Nombre: "nombre artista",
    Descripcion: "leyenda de ciudad",
    urlImagen: "url"
   }
 ]
    return (
        <div>
            <h1>Ciudades</h1>
            <ListaCabecera listado={ciudades} titulo="Ciudades"/>
        </div>
    );
}

export default Ciudades;
