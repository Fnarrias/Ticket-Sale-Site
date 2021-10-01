import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchTodosLosConciertos from "../actions/fetchTodosLosConciertos";
import ListaCabecera from "../components/ListaCabecera";

const Home = () => {
  const [conciertos, setConciertos] = useState([]);

  useEffect(() => {
    fetchTodosLosConciertos().then((res) => setConciertos(res.data));
  }, []);

  const styles = {
    backgroundColor: "#2A1B3D",
    padding: "10vh",
  };
  return (
    <Grid style={styles}>
      <ListaCabecera
        listado={conciertos}
        tipo="concierto"
        page="Todos los conciertos"
        comprarEntradas={true}
      />
    </Grid>
  );
};

export default Home;
