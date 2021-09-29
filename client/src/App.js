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
import ComprarEntradas from "./components/ComprarEntradas";
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
          <Route path="/artista/:nombre" exact>
            <Listadetalle tipo="artista" />
          </Route>
          <Route path="/ciudad/:nombre" exact>
            <Listadetalle tipo="ciudad" />
          </Route>
          <Route path="/genero/:nombre" exact>
            <Listadetalle tipo="genero" />
          </Route>
          <Route path="/generos" exact>
            <Genero />
          </Route>
          <Route path="/ciudades" exact>
            <Ciudades />
          </Route>
          <Route path="/artistas" exact>
            <Artistas />
          </Route>
          <Route path="/entradas/:idConcierto" exact>
            <ComprarEntradas />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
