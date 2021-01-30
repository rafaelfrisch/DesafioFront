import React, { Component } from 'react';
import Home from '../../Components/Home/Home'
import Header from '../../Components/Header/Header';

class ScreensHome extends Component{

    state = {
        booksearch: '',
        newbookSearch: '',
    }


    InputSearch = (event) => {
        this.setState({booksearch: event.target.value})
    }

    SearchBook = () => {
        let queryString = this.state.booksearch
        this.props.history.push(`/listagem/${queryString}`)
    }

    ChangeSearch = (event) => {
        this.setState({newbookSearch: event.target.value})
    }

    HandleSubmit = (event) =>{
        const newSearch = this.state.newbookSearch
        this.props.history.push(`/listagem/${newSearch}`)
    }

    render(){
        return(
            <div>
                <Header changeSearch={this.ChangeSearch} submit={this.HandleSubmit} showmenu={true} />
                <Home SearchBook={this.SearchBook} InputSearch={this.InputSearch}/>
            </div>
        )
    }
}


export default ScreensHome;