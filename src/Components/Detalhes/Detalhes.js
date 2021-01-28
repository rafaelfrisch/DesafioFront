import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Star from './Stars';

class DetalhesLivro extends Component{
    state = {
        rating: 0,
        hoverRating: 0
    }

    onMouseEnter = (index) => {
        this.setState({hoverRating: index})
    };

    onMouseLeave = () => {
        this.setState({hoverRating: 0})
    };

    onSaveRating = (index) => {
        this.setState({rating: index})
    };

    render(){
        
    let favorite = <FavoriteBorderIcon onClick={this.props.AddFavorite}/>;
    
    if (this.props.favorite)
        favorite = <FavoriteIcon onClick={this.props.AddFavorite}/>
    
        return(
        <div>
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.image} alt={this.props.title}/>
                <h1>By {this.props.authors}</h1>
                <h1>$ {this.props.price}</h1>
                <h1>{this.props.pages} pages</h1>
                <button>Buy</button>
                {favorite}
            </div>
            {
                [1, 2, 3, 4, 5].map((index)=>{
                    return(<Star
                        index={index}
                        hoverRating={this.state.hoverRating}
                        rating={this.state.rating}
                        onMouseEnter={this.onMouseEnter} 
                        onMouseLeave={this.onMouseLeave} 
                        onSaveRating={this.onSaveRating}
                    />)  
                })
            }
            <h1>{this.props.description}</h1>
        </div>
        )
    }
}
export default DetalhesLivro;