import React, { Component } from 'react';
import Listagem from '../../Components/Listagem/Listagem'
import axios from 'axios';
import HeaderListagem from '../../Components/Header/HeaderListagem';
import Button from '@material-ui/core/Button';
import './Listagem.css'

class ScreensListagem extends Component{

    state = {
        bookSearched: '',
        booksList: [],
        startindex: 0,
        newbookSearch: '',
    }

    componentDidMount = () => {
        const bookSearched = this.props.match.params.search
        this.setState({bookSearched: bookSearched})
        if(bookSearched){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearched}&startIndex=${this.state.startindex}`)
            .then( response =>{
                this.setState({booksList: response.data.items})
                this.setState({startindex: this.state.startindex+10})
                console.log(this.state.booksList)
                console.log(this.state.startindex) 
            })
            .catch( error =>{
                console.log(error)
            })
            
        }
        else
            console.log('notOk')

    }

    searchMore = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearched}&startIndex=${this.state.startindex}`)
        .then( response =>{
            let books = this.state.booksList
            books = books.concat(response.data.items)
            this.setState({booksList: books})
        })
        .catch( error =>{
            console.log(error)
        })
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
                <HeaderListagem search={this.state.bookSearched} changeSearch={this.ChangeSearch} submit={this.HandleSubmit} showmenu={true} />
                <div>
                    <Listagem search={this.state.bookSearched} books={this.state.booksList} searchMore={this.searchMore}/>
                    <div className="button-div">
                        <Button variant="contained" color="primary" id="show-more-button" size="large" onClick={this.searchMore}>
                            Show More
                        </Button>
                    </div>  

                </div>
            </div>
        )
    }
}


export default ScreensListagem;