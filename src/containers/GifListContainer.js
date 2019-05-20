import React, { Component } from 'react';
import GifList from '../components/GifList'

const API_KEY = '&api_key=om9zaofWdp8w3iIoNd0X0p6w9iTAhlP3'
const URL = 'http://api.giphy.com/v1/gifs/search?q='

class GifListContainer extends Component {

   state = {
      search: '',
      found: [],
   }

   getGifs() {
      const { search } = this.state
      console.log(`${URL + search + API_KEY}`)
      fetch(`${URL + search + API_KEY}`)
         .then(r => r.json())
         .then(found => this.setState({ found: found.data }))
         .catch(error => alert(error))
   }

   handleInput(e) {
      this.setState({ search: e.target.value })
      console.log(this.state.search)
   }

   render() {
      return (
         <React.Fragment>
            <input
               placeholder='giphy'
               value={this.state.search}
               onChange={(e) => this.handleInput(e)}
            >
            </input>
            <button
               onClick={() => this.getGifs()}
            >Search</button>
            {this.state.found.map(gif =>

               <GifList gif={gif} key={gif.id} />


            )}
         </React.Fragment>
      );
   }
}

export default GifListContainer;