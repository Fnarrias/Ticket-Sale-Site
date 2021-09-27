import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import BuscaConcierto from "./components/BuscaConcierto";

const App = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      {/* <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2> */}
      {/* <Login /> */}
      {/* <Registro /> */}
      <BuscaConcierto />
    </>
  );
};

export default App;
