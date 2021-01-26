import React from 'react';

const DetalhesLivro = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.publisher}</h2>
        </div>
    );
}

export default DetalhesLivro;