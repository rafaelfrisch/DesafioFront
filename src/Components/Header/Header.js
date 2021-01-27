import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';


const Header = (props) => {

    return (
        <div className="nav-bar">
            <a href="/" className="home-link">Home</a>
            <h1 className="searched-book">{props.search}</h1>
            <SearchIcon className="search"/>     
        </div>
    );
}

export default Header;