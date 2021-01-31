import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Detalhes.css';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2em',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4em',
        },
    },
}))

const Star = (props) => {
    const classes = useStyles();

    let star = <StarBorderIcon className={classes.root}/>;

    if(props.hoverRating >= props.index)
        star = <StarIcon className={classes.root}/>
    else if(!props.hoverRating && props.rating >=props.index)
        star = <StarIcon className={classes.root}/>

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