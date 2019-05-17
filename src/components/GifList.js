import React from "react";

const GifList = props => {
  return (
    <ul>
      {props.gifs.map((gif, idx) => (
        <img key={idx} src={gif.url} alt="" />
      ))}
    </ul>
  );
};

export default GifList;
