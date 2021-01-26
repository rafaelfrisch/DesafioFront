import React from 'react';

const CardLivro = (props) => {

    return (
        <div>
            <h2>{props.volumeInfo.title}</h2>
        </div>
    );
}

export default CardLivro;