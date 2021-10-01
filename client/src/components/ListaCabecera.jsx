import React from "react";
import { Link as ReactLink } from "react-router-dom";
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
import EntradasCompradas from "./EntradasCompradas";

const ListaCabecera = (props) => {
  const { listado, tipo, page, comprarEntradas } = props;
  console.log(`listado: ${JSON.stringify(listado)}`);
  console.log(`Tipo: ${tipo}`);
  console.log(`page: ${page}`);

  const mainListStyle = {
    backgroundColor: "#6E6D8E",
    padding: "4vh",
  };

  const mainTypo = {
    textAlling: "center",
    backgroundColor: "#812D62",
    color: "#ffffff",
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

  const lista = listado.map((element, index) => (
    <Grid item xs={3}>
      <Card align="center" key={index}>
        <CardMedia
          component="img"
          height="auto"
          image={`${element.urlImagen}`}
          alt={`${element.nombre}`}
        />
        <CardContent style={cardStyle.cardContent}>
          <Typography variant="h5" component="div">
            <p>{element.nombre}</p>
          </Typography>
        </CardContent>
        <CardActions
          sx={{ flexDirection: "column", justifyContent: "center" }}
          style={cardStyle.cardActionStyle}
        >
          {tipo === "concierto" && comprarEntradas && (
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
          )}
          {tipo !== "concierto" && comprarEntradas && (
            <Button
              size="large"
              variant="contained"
              style={cardStyle.buttonStyle}
            >
              <ReactLink
                to={`/${tipo}/${element.nombre}`}
                style={{ textDecoration: "none" }}
              >
                <Link underline="none" sx={{ color: "#ffffff" }}>
                  ver conciertos de {element.nombre}
                </Link>
              </ReactLink>
            </Button>
          )}
          {!comprarEntradas && <EntradasCompradas />}
          {/*<Button
            size="large"
            variant="contained"
            style={cardStyle.buttonStyle}
          >
            {tipo === "concierto" ? (
              <ReactLink
                to={`/entradas/${element._id}`}
                style={{ textDecoration: "none" }}
              >
                <Link underline="none" sx={{ color: "#ffffff" }}>
                  ver entradas de {element.nombre}
                </Link>
              </ReactLink>
            ) : (
              <ReactLink
                to={`/${tipo}/${element.nombre}`}
                style={{ textDecoration: "none" }}
              >
                <Link underline="none" sx={{ color: "#ffffff" }}>
                  ver conciertos de {element.nombre}
                </Link>
              </ReactLink>
            )}
            </Button>*/}
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Grid style={mainListStyle}>
      <Typography
        variant="h4"
        component="div"
        style={mainTypo}
        align="center"
        sx={{ fontFamily: "Monospace" }}
      >{`${page}`}</Typography>
      <Grid container spacing={4} justifyContent="center">
        {lista}
      </Grid>
    </Grid>
  );
};

export default ListaCabecera;
