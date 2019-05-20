import React from 'react';
import { Image, Grid } from 'semantic-ui-react'

const GifList = ({ gif }) =>
   <Grid.Column>
      <h3>{gif.title}</h3>
      <Image src={gif.images.original.url} size='small' rounded />
   </Grid.Column>

export default GifList