import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchConciertoPorId from "../actions/fetchConciertoPorId";
import comprarEntradas from "../actions/comprarEntradas";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ComprarEntradas = (prop) => {
  const { userId, userLogged } = prop;
  const [asientos, setAsientos] = useState([]);
  const [comproEntrada, setComproEntrada] = useState(0);
  const { idConcierto } = useParams();

  useEffect(() => {
    fetchConciertoPorId(idConcierto).then((res) =>
      setAsientos(res.data.recinto.sectores)
    );
  }, [idConcierto, comproEntrada]);

  const comprar = async (asiento, cantidad, conciertoId) => {
    if (userLogged === false) {
      window.alert(
        "Tiene que estar Logueado o registrarse para comprar un Ticket"
      );
    } else {
      await comprarEntradas(asiento, cantidad, conciertoId, userId);

      setComproEntrada(comproEntrada + 1);
    }
  };

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

  const listaPrecios = asientos.map((element, index) => (
    <Grid item xs={3}>
      <Card align="center" key={index}>
        <CardMedia
          component="img"
          height="auto"
          image={`/assets/images/${element.nombre}.png`}
          alt={`${element.nombre}`}
        />
        <CardContent style={cardStyle.cardContent}>
          <Typography variant="body1" component="div">
            <p>Asiento: {element.nombre}</p>
            <p>Precio: {element.precio}$</p>
            <p>Disponibilidad: {element.capacidad}</p>
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
            onClick={() => comprar(element.nombre, 1, idConcierto)}
          >
            Comprar Entrada {element.nombre}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
  console.log(asientos);

  return (
    <Grid style={mainListStyle}>
      <Grid style={insideListStyle}>
        <Typography
          variant="h4"
          component="div"
          style={mainTypo}
          align="center"
        >
          Tickets Disponibles :
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {listaPrecios}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ComprarEntradas;
