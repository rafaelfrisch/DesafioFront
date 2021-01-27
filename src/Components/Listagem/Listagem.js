import React from 'react';
import CardLivro from './Card';
import './Listagem.css';

const Listagem = (props) => {

    return (
        <div className="container">
        {props.books.map((book, index) =>{
            return <CardLivro
            key={index} 
            volumeInfo={book.volumeInfo}
            id={book.id}
            search={props.search}
            />
        }
        )}
        </div>
    );
}

export default Listagem;