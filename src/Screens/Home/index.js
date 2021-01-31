import React, { Component } from 'react';
import Home from '../../Components/Home/Home';

class ScreensHome extends Component{

    state = {
        bookSearch: '',
    }


    InputSearch = (event) => {
        this.setState({bookSearch: event.target.value})
    }

    HandleInputSubmit = (event) =>{
        const newSearch = this.state.bookSearch
        this.props.history.push(`/listagem/${newSearch}`)
    }


    render(){
        return(
            <div>
                <Home changeSearch={this.InputSearch} submit={this.HandleInputSubmit}/>
            </div>
        )
    }
}


export default ScreensHome;