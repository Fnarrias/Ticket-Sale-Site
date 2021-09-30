import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link as ReactLink } from "react-router-dom";
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

  const mainListStyle = {
    backgroundColor: "#2A1B3D",
    padding: "10vh",
  };

  const insideListStyle = {
    backgroundColor: "#A4B3B6",
    padding: "4vh",
  };

  const mainTypo = {
    textAlling: "center",
    backgroundColor: "#67677A",
    height: "5vh",
    margin: "3vh auto",
    padding: "5vh",
  };

  const cardStyle = {
    backgroundColor: "#D83F87",
    padding: 20,

    cardMedia: {
      height: "300px",
      width: "300px",
    },

    cardContent: {
      backgroundColor: "#44318D",
      color: "#ffffff",
    },

    cardActionStyle: {
      backgroundColor: "#8265A7",
      color: "#ffffff",
      padding: 10,
      height: "90px ",
    },

    buttonStyle: {
      color: "#ffffff",
      backgroundColor: "#D83F87",
      ":hover": {
        backgroundColor: "#812D62",
      },
      height: "auto",
    },
  };

  const listaConciertos = conciertos.map((element, index) => (
    <Grid item xs={3}>
      <Card align="center" key={index}>
        <CardMedia
          component="img"
          height="200"
          image=""
          alt={`${element.nombre}`}
        />
        <CardContent style={cardStyle.cardContent}>
          <Typography variant="body1" component="div">
            <p>{element.nombre}</p>
            <p>{element.artista.nombre}</p>
            <p>Fecha: {new Date(element.fecha).toLocaleDateString()}</p>
            <p>{element.descripción}</p>
          </Typography>
        </CardContent>
        <CardActions
          sx={{ flexDirection: "column", justifyContent: "center" }}
          style={cardStyle.cardActionStyle}
        >
          <Button
            size="large"
            variant="contained"
            style={cardStyle.buttonStyle}
          >
            <ReactLink
              to={`/entradas/${element._id}`}
              style={{ textDecoration: "none" }}
            >
              <Link underline="none" sx={{ color: "#ffffff" }}>
                ver entradas de {element.nombre}
              </Link>
            </ReactLink>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Grid style={mainListStyle}>
      <Grid style={insideListStyle}>
        <Typography
          variant="h4"
          component="div"
          style={mainTypo}
          align="center"
        >
          Conciertos
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {listaConciertos}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Listadetalle;
