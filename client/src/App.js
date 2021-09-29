import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Nav from "./components/Nav";
import Artistas from "./views/Artistas";
import Ciudades from "./views/Ciudades";
import Genero from "./views/Genero";
import Home from "./views/Home";
import IngresarConcierto from "./views/IngresarConcierto";
import Listadetalle from "./components/Listadetalle";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ingresoConcierto">
            <IngresarConcierto />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/genero">
            <Genero />
          </Route>
          <Route path="/ciudades">
            <Ciudades />
          </Route>
          <Route path="/artista" exact>
            <Artistas />
          </Route>
          <Route path="/artista/:nombreArtista" exact>
            <Listadetalle />
          </Route>
          <Route path="/ciudades/:nombreCiudad" exact>
            <Listadetalle />
          </Route>
          <Route path="/genero/:nombreGenero" exact>
            <Listadetalle />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
