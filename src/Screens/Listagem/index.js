import React, { Component } from 'react';
import Listagem from '../../Components/Listagem/Listagem'
import axios from 'axios';
import Header from '../../Components/Header/HeaderListagem';
import Button from '@material-ui/core/Button';
import './styles.css'

class ScreensListagem extends Component{

    state = {
        bookSearched: '',
        booksList: [],
        startIndex: 0,
        newbookSearch: '',
    }

    componentDidMount = () => {
        const bookSearched = this.props.match.params.search
        this.setState({bookSearched: bookSearched})

        if(bookSearched){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearched}&startIndex=${this.state.startIndex}&maxResults=21`)
            .then( response =>{
                if(response.data.totalItems > 0){
                    this.setState({booksList: response.data.items})
                    this.setState({startIndex: this.state.startIndex+21})
                }
            })
            .catch( error =>{
                console.log(error)
            })
            
        }
        else
            console.log('notOk')

    }

    searchMore = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearched}&startIndex=${this.state.startIndex}&maxResults=7`)
        .then( response =>{
            let books = this.state.booksList
            console.log(response.data.totalItems, this.state.startIndex)
            if(response.data.totalItems > this.state.startIndex){
                books = books.concat(response.data.items)
                this.setState({booksList: books})
                this.setState({startIndex: this.state.startIndex+7})
            }  
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
                <Header search={this.state.bookSearched} changeSearch={this.ChangeSearch} submit={this.HandleSubmit} showmenu={true} />
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