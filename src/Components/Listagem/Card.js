import React from 'react';
import { useHistory } from "react-router-dom";

const CardLivro = (props) => {
    let history = useHistory();

    const BookDetailsRedirect = (idLivro) => {
        console.log(idLivro)
        console.log(typeof(idLivro))
        history.push(`/livros/${idLivro}`)
    }
    return (
        <div>
            <h2>{props.volumeInfo.title}</h2>
            <button onClick={() => {BookDetailsRedirect(props.id)}}>Mais detalhes</button>
        </div>
    );
}

export default CardLivro;