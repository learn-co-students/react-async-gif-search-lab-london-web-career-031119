import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    search: "zoidberg"
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = (param = "zoidberg") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${param}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(resp => this.setState({ gifs: resp.data }));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => this.handleFetch(this.state.search);

  render() {
    return (
      <div>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ul>
          {this.state.gifs ? (
            <GifList gifs={this.state.gifs} />
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    );
  }
}

export default GifListContainer;
