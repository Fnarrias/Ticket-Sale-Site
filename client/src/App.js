import React, { useState } from "react";
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
  const [userLogged, setUserLogged] = useState(false);
  const [userId, setUserId] = useState("");
  return (
    <>
      <Router>
        <Nav userLogged={userLogged} setUserLogged={setUserLogged} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ingresoConcierto">
            <IngresarConcierto />
          </Route>
          <Route path="/login">
            <Login setUserLogged={setUserLogged} setUserId={setUserId} />
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
          {/*//! mandar como prop el setuser para validacion de user*/}
          <Route path="/entradas/:idConcierto" exact>
            <ComprarEntradas userId={userId}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
