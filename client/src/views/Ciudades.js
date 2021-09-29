import React, { useEffect, useState } from "react";
import fetchListaCiudades from "../actions/fetchListaCiudades";
import ListaCabecera from "../components/ListaCabecera";

const Ciudades = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    fetchListaCiudades().then((res) => setCiudades(res.data));
  }, []);

  return (
    <div>
      <h1>Ciudades</h1>
      <ListaCabecera listado={ciudades} tipo="ciudad" />
    </div>
  );
};

export default Ciudades;
