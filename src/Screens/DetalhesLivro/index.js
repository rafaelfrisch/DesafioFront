import React, { Component } from 'react';
import DetalhesLivro from '../../Components/Detalhes/Detalhes'
import axios from 'axios';
import HeaderListagem from '../../Components/Header/HeaderListagem';

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
            console.log(response.data.volumeInfo)
            this.setState({
                title: response.data.volumeInfo.title,
                authors: response.data.volumeInfo.authors,
                description: response.data.volumeInfo.description,
                pages: response.data.volumeInfo.pageCount,
                image: response.data.volumeInfo.imageLinks.thumbnail,
                price: response.data.saleInfo.listPrice.amount,
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
                <HeaderListagem search={this.state.bookSearched} changeSearch={this.ChangeSearch} submit={this.HandleSubmit} showmenu={false} menuOrArrowClicked={this.ArrowClicked}/>
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