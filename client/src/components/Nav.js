import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, Typography, Link } from "@mui/material";
import BuscaConcierto from "./BuscaConcierto";

const Nav = () => {
  //! agrego Nav para usar mui como prueba

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar   sx={{backgroundColor:'#44318d'}}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}  >
            <Button>
              <ReactLink to="/" style={{textDecoration:'none'}}><Link underline="none" sx={{color:'#ffffff'}}>Home</Link></ReactLink>
            </Button>
            <Button>
              <ReactLink to="/artista" style={{textDecoration:'none'}}><Link underline="none" sx={{color:'#ffffff'}}>Artista</Link></ReactLink>
            </Button>
            <Button>
              <ReactLink to="/genero" style={{textDecoration:'none'}}><Link underline="none" sx={{color:'#ffffff'}}>Genero</Link></ReactLink>
            </Button>
            <Button>
              <ReactLink to="/concierto" style={{textDecoration:'none'}}><Link underline="none" sx={{color:'#ffffff'}}>Conciertos</Link></ReactLink>
            </Button>
          </Typography>
          <BuscaConcierto />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
