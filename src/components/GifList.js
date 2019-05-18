import React from "react";

function GifList(props) {
  return (
    <ul className="gif-list">
      {props.gifs.map(gif => 
        <li className="gif" key={gif.id}>
          <img src={gif.images.original.url} alt="gif"/>
        </li> 
      )}
    </ul>
  );
};

export default GifList;