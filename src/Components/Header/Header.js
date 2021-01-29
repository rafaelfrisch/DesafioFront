import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';

const Header = (props) => {

    return (
        <div className="nav-bar">
            <HomeIcon className="home-icon" onClick={()=>window.location.href='/'}/>
            
            <div>
                <h1 className="searched-book">{props.search}</h1>
            </div>     
            <SearchIcon className="search"/>     
        </div>
    );
}

export default Header;