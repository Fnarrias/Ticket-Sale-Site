import React from 'react';

const HomeUsuario = () => {
    const [conciertos, setConciertos] = useState([]);

    useEffect(() => {
      fetchTodosLosConciertos().then((res) => setConciertos(res.data));
    }, []);
  
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
