import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchConciertoPorId from "../actions/fetchConciertoPorId";
import comprarEntradas from "../actions/comprarEntradas";

const ComprarEntradas = () => {
  const [asientos, setAsientos] = useState([]);
  const [comproEntrada, setComproEntrada] = useState(0);
  const { idConcierto } = useParams();

  useEffect(() => {
    fetchConciertoPorId(idConcierto).then((res) =>
      setAsientos(res.data.recinto.sectores)
    );
  }, [idConcierto, comproEntrada]);

  const comprar = async (asiento, cantidad, conciertoId) => {
    await comprarEntradas(asiento, cantidad, conciertoId);

    setComproEntrada(comproEntrada + 1);
  };
  const listaPrecios = asientos.map((element, index) => (
    <li key={index}>
      <p>Asiento: {element.nombre}</p>
      <p>Precio: {element.precio}$</p>
      <p>Disponibilidad: {element.capacidad}</p>
      <button onClick={() => comprar(element.nombre, 1, idConcierto)}>
        Comprar Entrada
      </button>
    </li>
  ));
  console.log(asientos);

  return <ul>{listaPrecios}</ul>;
};

export default ComprarEntradas;
