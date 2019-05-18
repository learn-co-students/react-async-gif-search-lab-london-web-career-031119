import React, { Component } from "react";

import GifList from '../components/GifList';
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  
  state = {
    gifs: [],
  };
  
  handleSubmit = query => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState( { gifs: data } ))

  }

  render() {
    return (
      <div className="gift-list-container">
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    );
  };
};

export default GifListContainer