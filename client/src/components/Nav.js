import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import BuscaConcierto from "./BuscaConcierto";

const Nav = () => {
  //! agrego Nav para usar mui como prueba

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/artista"> Artista</Link>
            </Button>
            <Button>
              <Link to="/genero">Genero</Link>
            </Button>
            <Button>
              <Link to="/concierto">Conciertos</Link>
            </Button>
          </Typography>
          <BuscaConcierto />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
