import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (query = "dolphins") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&aJ152uuXjKgOaOy5atn0tSGn9Lshr2YK`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer