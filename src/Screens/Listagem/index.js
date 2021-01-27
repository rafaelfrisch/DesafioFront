import React, { Component } from 'react';
import Listagem from '../../Components/Listagem/Listagem'
import axios from 'axios';
import Header from '../../Components/Header/Header';


class ScreensListagem extends Component{

    state = {
        bookSearched: '',
        booksList: [],
    }

    componentDidMount = () => {
        const bookSearched = this.props.match.params.search
        this.setState({bookSearched: bookSearched})
        if(bookSearched){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearched}`)
            .then( response =>{
                this.setState({booksList: response.data.items})
                console.log(this.state.booksList) 
            })
            .catch( error =>{
                console.log(error)
            })
            
        }
        else
            console.log('notOk')

    }

    render(){
        return(
            <div>
                <Header search={this.state.bookSearched}/>
                <Listagem search={this.state.bookSearched} books={this.state.booksList}/>
            </div>
        )
    }
}


export default ScreensListagem;