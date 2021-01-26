import React, { Component } from 'react';
import Listagem from '../../Components/Listagem/Listagem'
import queryString from 'query-string';

class ScreensListagem extends Component{

    state = {
        'bookSearched': '',
    }

    componentDidMount = () => {
        const params = queryString.parse(this.props.location.search)
        const bookSearched = params.book
        this.setState({bookSearched: bookSearched})
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.bookSearched}</h1>
                <Listagem/>
            </div>
        )
    }
}


export default ScreensListagem;