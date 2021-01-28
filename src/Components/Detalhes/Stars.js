import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Star = (props) => {
    let star = <StarBorderIcon/>;

    if(props.hoverRating >= props.index)
        star = <StarIcon/>
    else if(!props.hoverRating && props.rating >=props.index)
        star = <StarIcon/>

    return (
        <div onMouseEnter={() => props.onMouseEnter(props.index)} 
        onMouseLeave={() => props.onMouseLeave()} 
        onClick={() => props.onSaveRating(props.index)}>
            {star}
        </div>
    );
}

export default Star;