import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleQueryChange = event => {
    event.persist();
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.query(this.state.query);
          }}
        >
          <label>Enter a search term:</label>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
