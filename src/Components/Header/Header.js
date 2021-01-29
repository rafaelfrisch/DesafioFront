import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Header = (props) => {
    
    return (
        <div className="nav-bar">
            {/* <HomeIcon  onClick={()=>window.location.href='/'}/> */}
            <ArrowBackIcon className="home-icon"/>
            <div>
                <h1 className="searched-book">{props.search}</h1>
            </div>     
            <SearchIcon className="search"/>     
        </div>
    );
}

export default Header;