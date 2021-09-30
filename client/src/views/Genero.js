import { Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import fetchListaGeneros from "../actions/fetchListaGeneros";
import ListaCabecera from "../components/ListaCabecera";

const Genero = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetchListaGeneros().then((res) => setGeneros(res.data));
  }, []);

  const styles = {
    backgroundColor: "#2A1B3D",
    padding: "10vh",
  };

  return (
    <Grid style={styles}>
      <ListaCabecera listado={generos} tipo="genero" page="Generos" />
    </Grid>
  );
};

export default Genero;
