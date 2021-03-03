import SearchBar from './SearchBar'
import './home.css'
import { Component, Fragment } from 'react'
import ImageList from './ImageList'
import axios from 'axios'


class Display extends Component {

    state={
        results :[]
    }


    onTextSubmit = async(item) =>{
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${item}&client_id=eI-YBOw9gLWoTT9COIMVTXjZMReebSzCagXbCWs3OnE&per_page=28`)
        this.setState({
            results: response.data.results
        })
    }

    render(){
    return(
        <Fragment>
            <SearchBar onUserSearch={this.onTextSubmit}/>
            <ImageList imagesData={this.state.results}/>
        </Fragment>
    )}
}

export default Display