import { Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import fetchListaArtistas from "../actions/fetchListaArtistas";
import ListaCabecera from "../components/ListaCabecera";

const Artistas = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetchListaArtistas().then((res) => setArtistas(res.data));
  }, []);

  const styles = {
    backgroundColor: "#2A1B3D",
    padding: "10vh",
  };

  return (
    <Grid style={styles}>
      <ListaCabecera
        listado={artistas}
        tipo="artista"
        page="Conciertos por artistas"
        comprarEntradas={true}
      />
    </Grid>
  );
};

export default Artistas;
