import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Nav from "./components/Nav";
import Artistas from "./views/Artistas";
import Conciertos from "./views/Conciertos";
import Genero from "./views/Genero";
import Home from "./views/Home";
import IngresarConcierto from "./views/IngresarConcierto";

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
          <Route path="/concierto">
            <Conciertos />
          </Route>
          <Route path="/artista" exact>
            <Artistas />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
