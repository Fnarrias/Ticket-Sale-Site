import { Button, Link } from "@mui/material";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

const prueba = () => {
  return (
   {tipo === "concierto" && comprarEntradas && <Button
    size="large"
    variant="contained"
    style={cardStyle.buttonStyle}
  >
      <ReactLink
        to={`/entradas/${element._id}`}
        style={{ textDecoration: "none" }}
      >
        <Link underline="none" sx={{ color: "#ffffff" }}>
          ver entradas de {element.nombre}
        </Link>
      </ReactLink>
    </Button>}
    {tipo !== "concierto" && comprarEntradas && 
    <Button 
        size="large"
         variant="contained"
        style={cardStyle.buttonStyle}>
        <ReactLink
        to={`/${tipo}/${element.nombre}`}
        style={{ textDecoration: "none" }}
    >
        <Link underline="none" sx={{ color: "#ffffff" }}>
        ver conciertos de {element.nombre}
        </Link>
    </ReactLink>
    </Button>
}  
{!comprarEntradas && <h1> hola </h1>}

 
  
  );
};

export default prueba;


