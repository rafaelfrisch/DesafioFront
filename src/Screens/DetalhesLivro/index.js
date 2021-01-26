import React, { Component } from 'react';
import DetalhesLivro from '../../Components/Detalhes/Detalhes'
import axios from 'axios';

class ScreensDetalhesLivro extends Component{

    state = {
        bookTitle: '',
        bookPublisher: '',
    }

    componentDidMount = () =>{
        const livroId = this.props.match.params.livroId
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
                <DetalhesLivro title={this.state.bookTitle} publisher={this.state.bookPublisher}/>
            </div>
        )
    }
}


export default ScreensDetalhesLivro;