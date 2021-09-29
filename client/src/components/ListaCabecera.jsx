import React from "react";
import { Link } from "react-router-dom";

const ListaCabecera = (props) => {
  const { listado, tipo } = props;
  console.log(listado);

  const lista = listado.map((element, index) => (
    <li key={index}>
      <p>{element.nombre}</p>

      <Link to={`/${tipo}/${element.nombre}`}>
        ver conciertos de {element.nombre}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{lista}</ul>
    </div>
  );
};

export default ListaCabecera;
