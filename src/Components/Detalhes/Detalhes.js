import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const DetalhesLivro = (props) => {
    let favorite = <FavoriteBorderIcon onClick={props.AddFavorite}/>;
    
    if (props.favorite)
        favorite = <FavoriteIcon onClick={props.AddFavorite}/>
    

    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <img src={props.image} alt={props.title}/>
                <h1>By {props.authors}</h1>
                <h1>$ {props.price}</h1>
                <h1>{props.pages} pages</h1>
                <button>Buy</button>
                {favorite}
            </div>
            
            <h1>{props.description}</h1>
        </div>
    );
}

export default DetalhesLivro;