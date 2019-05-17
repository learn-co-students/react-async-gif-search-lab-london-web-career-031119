import React from "react";

const GifList = props => {
  return props.gifs.map((item, index) => (
    <li>
      <img src={item.images.original.url} key={index} />
    </li>
  ));
};

export default GifList;
