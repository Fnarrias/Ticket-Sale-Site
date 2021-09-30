import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import fetchBusqueda from "../actions/fetchMatrizBusqueda";
import { useHistory } from "react-router";

const BuscaConcierto = () => {
  let history = useHistory()
  const [matrizBusqueda, setMatrizBusqueda] = useState([])
  const items = [
    {
      id: 0,
      name: "Alanis",
      type: "Artista"
    },
    {
      id: 1,
      name: "Santiago",
      type: "Cuidad"
    },
    {
      id: 2,
      name: "Rock",
      type: "Género",
    },
    {
      id: 3,
      name: "Valparaíso",
      type: "Cuidad"
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  useEffect(()=>{
    fetchBusqueda().then((res) => setMatrizBusqueda(res.data));
  },[])

  const handleOnSelect = (item) => {
    // the item selected
    console.log(`Aquí apreto seleccionar${JSON.stringify(item)}`);
    history.push(`/${item.type}/${item.name}`)

  };

  console.log(matrizBusqueda);

  return (
    <div>
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={matrizBusqueda}
          onSelect={handleOnSelect}
          fuseOptions= {{threshold: 0.1}}
          autoFocus
        />
      </div>
    </div>
  );
};

export default BuscaConcierto;
