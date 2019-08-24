import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Package from './Package/Package';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>

      <Grid container spacing={3}>
        <Package/>
        <Package/>
        <Package/>

        <Package/>
        <Package/>
        <Package/>
      </Grid>
    </div>
    );
  }
}
export default Home;