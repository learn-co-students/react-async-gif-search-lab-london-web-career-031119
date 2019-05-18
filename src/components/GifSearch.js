import React, { Component } from "react";

class GifSearch extends Component {
  
  state = {
    searchTerm: ''
  }

  handleChange = event => this.setState( { searchTerm: event.target.value } )

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchTerm)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="SearchTerm">Enter a Search Term:</label>
        <br/>
        <input type="search" name="SearchTerm" id="SearchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        <br/>
        <input type="button" value="Find Gifs"/>
      </form>
    );
  };
};

export default GifSearch;