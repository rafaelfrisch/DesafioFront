import React from 'react';

const Home = (props) => {

    return (
        <div>
            <h1>Pesquisa de livros</h1>
            <input onChange={props.InputSearch}></input>
            <button onClick={props.SearchBook}>Pesquisar</button>
        </div>
    );
}

export default Home;