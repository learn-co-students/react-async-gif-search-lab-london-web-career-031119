import React from "react";

const GifSearch = props => {
  return (
    <label>
      <input name="search" onChange={e => props.handleChange(e)} />
      <button onClick={props.handleSubmit}>Search</button>
    </label>
  );
};

export default GifSearch;
