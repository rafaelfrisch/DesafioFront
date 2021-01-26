import React from 'react';
import CardLivro from './Card';

const Listagem = (props) => {

    return (
        <div>
        {props.books.map((book, index) =>{
            return <CardLivro
            key={index} 
            volumeInfo={book.volumeInfo}
            id={book.id}
            />
        }
        )}
        </div>
    );
}

export default Listagem;