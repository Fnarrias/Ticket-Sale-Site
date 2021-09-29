import React from "react";
import { useEffect, useState } from "react";
import fetchListaGeneros from "../actions/fetchListaGeneros";
import ListaCabecera from "../components/ListaCabecera";

const Genero = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetchListaGeneros().then((res) => setGeneros(res.data));
  }, []);

  return (
    <div>
      <h1>genero</h1>
      <ListaCabecera listado={generos} tipo="genero" />
    </div>
  );
};

export default Genero;
