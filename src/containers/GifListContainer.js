import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  getGifs = (query = "dogs") => {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zPeU2Jj3XsL11gVbewh6MVg3k5tjE2f9&limit=5`
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url }))
        });
      });
  };

  componentDidMount() {
    this.getGifs("hello");
  }

  render() {
    return (
      <div>
        <GifSearch query={this.getGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
