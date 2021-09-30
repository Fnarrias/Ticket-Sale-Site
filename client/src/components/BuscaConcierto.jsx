import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import fetchBusqueda from "../actions/fetchMatrizBusqueda";
import { useHistory } from "react-router";

const BuscaConcierto = () => {
  let history = useHistory()
  const [matrizBusqueda, setMatrizBusqueda] = useState([])

  useEffect(()=>{
    fetchBusqueda().then((res) => setMatrizBusqueda(res.data));
  },[])

  const handleOnSelect = (item) => {
    // the item selected
    //console.log(`Aquí apreto seleccionar${JSON.stringify(item)}`);
    history.push(`/${item.type}/${item.name}`
    )

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
