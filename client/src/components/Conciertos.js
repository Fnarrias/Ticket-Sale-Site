import React, { useEffect, useState } from "react";
//?agregaria el Link para enlazar el boton de comprar...
import { useParams } from "react-router-dom";
import fetchConciertoPorId from "../actions/fetchConciertoPorId";

const Conciertos = () => {
  const [conciertoProps, setConciertoProps] = useState(null);
  const [existe, setExiste] = useState(true);
  const { conciertoId } = useParams();

  useEffect(() => {
    fetchConciertoPorId(conciertoId).then((res) => {
      const { success } = res;
      if (success) setConciertoProps(res.data);
      else setExiste(false);
    });
  }, [conciertoId]);

  if (!conciertoProps && existe) return <h1>Cargando concierto...</h1>;
  else if (!existe) return <h1>No existe el Concierto</h1>;
  else
    return (
      <>
        {/* //! estructura provicional falta adicionar MUI*/}
        <div>
          <div>
            <h1>Detalles sobre: {conciertoProps.nombreConcierto}</h1>{" "}
            {/*//!Nombres Provicionales */}
          </div>
        </div>
        <div>
          <h4>Precio: {conciertoProps.precio}</h4>
          <h4>Descripcion: {conciertoProps.descripcion}</h4>

          <div>
            <div>
              <h3>Disponibles: {conciertoProps.boletosDisponibles}</h3>
            </div>
          </div>
        </div>
      </>
    );
};

export default Conciertos;
