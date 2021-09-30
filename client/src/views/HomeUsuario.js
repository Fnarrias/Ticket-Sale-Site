import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ListaCabecera from "../components/ListaCabecera";
import conciertosPorUsuario from "../actions/fetchConciertosUsuario";

const HomeUsuario = () => {
    const [conciertos, setConciertos] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
      conciertosPorUsuario(userId).then((res) => setConciertos(res.data))
      //fetchTodosLosConciertos().then((res) => setConciertos(res.data));
      //window.alert(userId);
    }, [userId]);
  
    const styles = {
      backgroundColor: "#2A1B3D",
      padding: "10vh",
    };
    return (
        <>
          <Grid style={styles}>
             <ListaCabecera listado={conciertos} tipo="concierto" page="Mis Conciertos" />
          </Grid>
        </>
    );
}

export default HomeUsuario;
