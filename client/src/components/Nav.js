import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";

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

          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
