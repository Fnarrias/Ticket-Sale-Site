import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fetchConciertosPorArtista from "../actions/fetchConciertosPorArtista";
import fetchConciertosPorCiudad from "../actions/fetchConciertosPorCiudad";
import fetchConciertosPorGenero from "../actions/fetchConciertosPorGenero";
const Listadetalle = (props) => {
  // el fetch que hará el useEffect va a depender de qué la propiedad tipo,
  // que se le da en la ruta
  const { tipo } = props;
  const { nombre } = useParams();

  console.log(nombre);

  const [conciertos, setConciertos] = useState([]);

  useEffect(() => {
    if (tipo === "artista")
      fetchConciertosPorArtista(nombre).then((res) => setConciertos(res.data));
    if (tipo === "genero")
      fetchConciertosPorGenero(nombre).then((res) => setConciertos(res.data));
    if (tipo === "ciudad")
      fetchConciertosPorCiudad(nombre).then((res) => setConciertos(res.data));
  }, [tipo, nombre]);

  const listaConciertos = conciertos.map((element, index) => (
    <li key={index}>
      <p>{element.nombre}</p>
      <p>{element.artista.nombre}</p>
      <p>{element.fecha}</p>
      <p>{element.descripción}</p>
      <Link to={`/entradas/${element._id}`}>Comprar Entradas</Link>
    </li>
  ));

  return <div>{listaConciertos}</div>;
};

export default Listadetalle;
