import React from "react";
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
import Imagen from "../images/pexels-eberhard-grossgasteiger-844297.jpg";

const Nav = () => {
  const navStyle = {
    backgroundImage: `url(${Imagen})`,
    height: "auto",
    width: "auto",
    padding: "5vh",
    textAlign: "center",

    ticketStyle: {
      marginBottom: "0px",
    },

    boxStyle: { marginBottom: "5vh" },
  };
  return (
    <>
      <Paper style={navStyle}>
        <Box color="transparent" style={navStyle.boxStyle}>
          <AppBar position="static" color="transparent">
            {" "}
            {/* //!Static para evitar que se sobrepongan */}
            <Toolbar sx={{ flexDirection: "row-reverse" }}>
              <Typography>
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
            </Toolbar>
          </AppBar>
        </Box>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          style={navStyle.ticketStyle}
        >
          Live-Ticket
        </Typography>
      </Paper>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#44318d" }}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <Button>
                <ReactLink to="/" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Home
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/artista" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Artista
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/genero" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Genero
                  </Link>
                </ReactLink>
              </Button>
              <Button>
                <ReactLink to="/concierto" style={{ textDecoration: "none" }}>
                  <Link underline="none" sx={{ color: "#ffffff" }}>
                    Conciertos
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
