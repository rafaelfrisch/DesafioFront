import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Detalhes.css';

const Star = (props) => {
    let star = <StarBorderIcon fontSize="large"/>;

    if(props.hoverRating >= props.index)
        star = <StarIcon fontSize="large"/>
    else if(!props.hoverRating && props.rating >=props.index)
        star = <StarIcon fontSize="large"/>

    return (
        <div className="stars" 
        onMouseEnter={() => props.onMouseEnter(props.index)} 
        onMouseLeave={() => props.onMouseLeave()} 
        onClick={() => props.onSaveRating(props.index)}>
            {star}
        </div>
    );
}

export default Star;