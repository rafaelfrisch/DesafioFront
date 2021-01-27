import React, { Component } from 'react';
import Home from '../../Components/Home/Home'


class ScreensHome extends Component{

    state = {
        booksearch: ''
    }


    InputSearch = (event) => {
        this.setState({booksearch: event.target.value})
    }

    SearchBook = () => {
        let queryString = this.state.booksearch
        this.props.history.push(`/listagem/${queryString}`)
    }

    render(){
        return(
            <div>
                <Home SearchBook={this.SearchBook} InputSearch={this.InputSearch}/>
            </div>
        )
    }
}


export default ScreensHome;