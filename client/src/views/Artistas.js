import React from "react";
import { useEffect, useState } from "react";
import fetchListaArtistas from "../actions/fetchListaArtistas";
import ListaCabecera from "../components/ListaCabecera";

const Artistas = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetchListaArtistas().then((res) => setArtistas(res.data));
  }, []);

  return (
    <div>
      <h1>Artistas</h1>
      <ListaCabecera listado={artistas} tipo="artista" />
    </div>
  );
};

export default Artistas;
