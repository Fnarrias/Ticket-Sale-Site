import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import BuscaConcierto from "./BuscaConcierto";
import Imagen from "../images/pexels-luis-quintero-3101522.jpg";
import UsuarioLogueado from "./UsuarioLogueado";

const Nav = (props) => {
  const { userLogged, setUserLogged } = props;
  console.log(`Usuario logueado prop ${userLogged}`);
  const [hiddeLogin, setHiddeLogin] = useState({ display: "block" });

  useEffect(() => {
    console.log(`Usuario logueado ${userLogged}`);
    if (userLogged === true) {
      setHiddeLogin({ display: "none" });
    } else {
      setHiddeLogin({ display: "block" });
    }
  }, [userLogged]);

  const navStyle = {
    backgroundImage: `url(${Imagen})`,
    height: "auto",
    width: "auto",
    padding: "5vh",
    textAlign: "center",
    ticketStyle: {
      marginBottom: "0px",
      color: "#D83F87",
      border: "10px #44318D ",
      borderStyle: "double  ",
    },
    boxStyle: { marginBottom: "5vh" },
    navFix: {
      marginLeft: "15vh",
    },
    toolbarFix: {
      paddingRight: "20vh",
    },
  };
  return (
    <>
      <Paper style={navStyle}>
        <Box color="transparent" style={navStyle.boxStyle}>
          <AppBar position="static" color="transparent">
            {" "}
            {/* //!Static para evitar que se sobrepongan */}
            <Toolbar sx={{ flexDirection: "row-reverse" }}>
              <Typography style={hiddeLogin}>
                <Button
                  variant="contained"
                  sx={{ mr: 2, backgroundColor: "#44318d" }}
                >
                  <ReactLink to="/login" style={{ textDecoration: "none" }}>
                    <Link underline="none" sx={{ color: "#ffffff" }}>
                      Login
                    </Link>
                  </ReactLink>
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#44318d" }}>
                  <ReactLink to="/registro" style={{ textDecoration: "none" }}>
                    <Link underline="none" sx={{ color: "#ffffff" }}>
                      Registrar
                    </Link>
                  </ReactLink>
                </Button>
              </Typography>
              {userLogged && (
                <UsuarioLogueado
                  setUserLogged={setUserLogged}
                  userid="id usuario"
                />
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          style={navStyle.ticketStyle}
          sx={{ fontWeight: "bold" }}
        >
          Live -Ticket
        </Typography>
      </Paper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{ backgroundColor: "#44318d" }}
            style={navStyle.toolbarFix}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1 }}
              style={navStyle.navFix}
            >
              <Button>
                <ReactLink to="/" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Home
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/artistas" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Artista
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/generos" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Genero
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/ciudades" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Ciudades
                  </Link>
                </ReactLink>
              </Button>
            </Typography>
            <BuscaConcierto />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
