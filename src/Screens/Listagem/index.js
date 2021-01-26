import React, { Component } from 'react';
import Listagem from '../../Components/Listagem/Listagem'
import queryString from 'query-string';
import axios from 'axios';

class ScreensListagem extends Component{

    state = {
        'bookSearched': '',
        'booksList': [],
    }

    componentDidMount = () => {
        const params = queryString.parse(this.props.location.search)
        const bookSearched = params.book
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
                <h1>{this.state.bookSearched}</h1>
                <Listagem books={this.state.booksList}/>
            </div>
        )
    }
}


export default ScreensListagem;