import React from 'react';
import { useHistory } from "react-router-dom";
import NotFound from './NotFound.png';

const CardLivro = (props) => {
    let history = useHistory();

    const BookDetailsRedirect = (idLivro) => {
        console.log(idLivro)
        console.log(typeof(idLivro))
        history.push(`/livros/${idLivro}`)
    }

    let image;

    if (props.volumeInfo.imageLinks == undefined)
        image = <img src={NotFound} alt={props.volumeInfo.title}/>
    else
        image = <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title}/>
    
    return (
        <div>
            {image}
            <h2>{props.volumeInfo.title}</h2>
            <button onClick={() => {BookDetailsRedirect(props.id)}}>Mais detalhes</button>
        </div>
    );
}

export default CardLivro;