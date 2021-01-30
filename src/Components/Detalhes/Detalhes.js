import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Star from './Stars';
import './Detalhes.css';
import NotFound from '../../NotFound.png';

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
        
    let favorite = <FavoriteBorderIcon className="favorite-button" onClick={this.props.AddFavorite}/>;
    
    if (this.props.favorite)
        favorite = <FavoriteIcon className="favorite-button" onClick={this.props.AddFavorite}/>
    
        return(
        <div>
            <div className="details">
                <div className="details-container">
                    <div className="sub-details-container">
                        <img src={this.props.image==null ? NotFound:this.props.image} alt={this.props.title} className="book-image"/>
                        <h2 className="sub-title">{this.props.pages==undefined ? 'Number of pages not found': this.props.pages+'pages'}</h2>
                    </div>
                    <div className="sub-details-container">
                        <h1 className="book-title">{this.props.title}</h1>
                        <h2 className="sub-title">By {this.props.authors.map(
                            (author, index)=>{return(this.props.authors.length==index+1 ? author: author+' and ')})}
                        </h2>
                        <div className="price-rating-container">
                            <h1 className="price">$ {this.props.price}</h1>
                            <div className="flex-container-star">
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
                            </div>
                        </div>
                        <div className="buy-favorite-buttons">
                            <Button variant="contained" color="primary" id="buy-button" size="large">
                                Buy
                            </Button>
                            {favorite}
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="description">{this.props.description}</p>
        </div>
        )
    }
}
export default DetalhesLivro;