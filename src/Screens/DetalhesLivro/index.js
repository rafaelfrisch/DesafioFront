import React, { Component } from 'react';
import DetalhesLivro from '../../Components/Detalhes/Detalhes'
import axios from 'axios';
import Header from '../../Components/Header/Header';

class ScreensDetalhesLivro extends Component{

    state = {
        bookSearched: '',
        title: '',
        authors: [],
        description: '',
        pages: '',
        image: '',
        price: '',
        favorite: false,
    }

    componentDidMount = () =>{
        const livroId = this.props.match.params.livroId
        const bookSearched = this.props.match.params.search
        this.setState({bookSearched: bookSearched}) 
        axios.get(`https://www.googleapis.com/books/v1/volumes/${livroId}`)
        .then( response =>{

            let price = response.data.saleInfo.listPrice==undefined ? 9.99 : response.data.saleInfo.listPrice.amount.toFixed(2)
            let image = response.data.volumeInfo.imageLinks==undefined ? null : response.data.volumeInfo.imageLinks.thumbnail
            let description = response.data.volumeInfo.description==undefined ? 'Description not Found' : response.data.volumeInfo.description
            let authors = response.data.volumeInfo.authors==undefined ? ['Author not found'] : response.data.volumeInfo.authors

            this.setState({
                title: response.data.volumeInfo.title,
                pages: response.data.volumeInfo.pageCount,
                authors: authors,
                description: description,
                image: image,
                price: price,
            })
            console.log(this.state)
             
        })
        .catch( error =>{
            console.log(error)
        })
    }

    AddFavorite = (event) => {
        this.setState({favorite: !this.state.favorite})
    }

    ChangeSearch = (event) => {
        this.setState({newbookSearch: event.target.value})
    }

    HandleSubmit = (event) =>{
        const newSearch = this.state.newbookSearch
        this.props.history.push(`/listagem/${newSearch}`)
    }

    ArrowClicked = (event) =>{
        const bookSearched = this.state.bookSearched
        this.props.history.push(`/listagem/${bookSearched}`)
    }
    
    render(){
        return(
            <div>
                <Header search={this.state.bookSearched} changeSearch={this.ChangeSearch} submit={this.HandleSubmit} showmenu={false} menuOrArrowClicked={this.ArrowClicked}/>
                <DetalhesLivro 
                    title={this.state.title} authors={this.state.authors} description={this.state.description}
                    pages={this.state.pages} image={this.state.image} price={this.state.price} favorite={this.state.favorite}
                    AddFavorite={this.AddFavorite}
                />
            </div>
        )
    }
}


export default ScreensDetalhesLivro;