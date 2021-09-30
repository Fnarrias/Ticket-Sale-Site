import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchListaCiudades from "../actions/fetchListaCiudades";
import ListaCabecera from "../components/ListaCabecera";

const Ciudades = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    fetchListaCiudades().then((res) => setCiudades(res.data));
  }, []);

  const styles = {
    backgroundColor: "#2A1B3D",
    padding: "10vh",
  };

  return (
    <Grid style={styles}>
      <ListaCabecera
        listado={ciudades}
        tipo="ciudad"
        page="Conciertos por Ciudades"
      />
    </Grid>
  );
};

export default Ciudades;
