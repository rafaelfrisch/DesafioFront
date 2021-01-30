import React from 'react';
import { useHistory } from "react-router-dom";
import NotFound from '../../NotFound.png';

const CardLivro = (props) => {
    let history = useHistory();

    const BookDetailsRedirect = (idLivro) => {
        console.log(idLivro)
        console.log(typeof(idLivro))
        history.push(`/livros/${props.search}/${idLivro}`)
    }

    let image;

    if (props.volumeInfo.imageLinks == undefined)
        image = <img src={NotFound} alt={props.volumeInfo.title} onClick={() => {BookDetailsRedirect(props.id)}} className="image"/>
    else
        image = <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} onClick={() => {BookDetailsRedirect(props.id)}} className="image"/>
    
    return (
        <div className="image-div">
            {image}
        </div>
    );
}

export default CardLivro;