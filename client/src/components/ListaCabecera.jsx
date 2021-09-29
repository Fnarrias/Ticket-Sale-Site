import React from 'react';
import { Link } from 'react-router-dom';

const ListaCabecera = (props) => {
    const {listado, titulo} = props;
    const tipo = "Artista"
    const nombreartista = "Metallica"
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{JSON.stringify(listado)}</p>
            <Link to={`/${tipo}/${nombreartista}`}>Link hacia los conciertos</Link>
            {/* en cada ciuadro link a detalle enviando el nombre del artista, nombre ciudad o nombre de genero además por qué buscar(artista, genero o ciudad)*/}
        </div>
    );
}

export default ListaCabecera;
