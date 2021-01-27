import React, { Component } from 'react';
import DetalhesLivro from '../../Components/Detalhes/Detalhes'
import axios from 'axios';
import Header from '../../Components/Header/Header';

class ScreensDetalhesLivro extends Component{

    state = {
        bookTitle: '',
        bookPublisher: '',
        bookSearched: '',
    }

    componentDidMount = () =>{
        const livroId = this.props.match.params.livroId
        const bookSearched = this.props.match.params.search
        this.setState({bookSearched: bookSearched}) 
        axios.get(`https://www.googleapis.com/books/v1/volumes/${livroId}`)
        .then( response =>{
            console.log(response.data.volumeInfo)
            this.setState({
                bookTitle: response.data.volumeInfo.title,
                bookPublisher: response.data.volumeInfo.publisher
            })
             
        })
        .catch( error =>{
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <Header search={this.state.bookSearched}/>
                <DetalhesLivro title={this.state.bookTitle} publisher={this.state.bookPublisher}/>
            </div>
        )
    }
}


export default ScreensDetalhesLivro;