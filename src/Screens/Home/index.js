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

    componentDidMount = () =>{
        document.body.style.backgroundColor = "#f9dd08"
    }

    render(){
        return(
            <div style={{backgroundColor: '#f9dd08'}}>
                <Home changeSearch={this.InputSearch} submit={this.HandleInputSubmit}/>
            </div>
        )
    }
}


export default ScreensHome;