import React from 'react'
import { Grid } from 'semantic-ui-react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <Grid columns={4}>
      <Grid.Row>
        <NavBar color='black' title="Giphy Search" />
      </Grid.Row>
      <Grid.Row>
        <GifListContainer />
      </Grid.Row>
    </Grid>
  )
}

export default App
