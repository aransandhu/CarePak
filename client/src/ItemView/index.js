import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, IconButton, TextField } from '@material-ui/core';
import styled from 'styled-components';

export default class ItemView extends Component {

  render() {

    return (
      <Grid container spacing={3} style={{width: '98vw'}}>
        <Grid item xs={5}>
          <div style={{padding: '7rem 2rem'}}>
            <Typography variant="h3" style={{ fontWeight: '700'}}>Donate to Charity of Ryan</Typography>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div>
            <Box/>
          </div>
        </Grid>
      </Grid>
    );
  }
}


const Box = styled.img.attrs({
  src: 'open_box.png'
})`
width: 300px;
height: 220px;
position: absolute;
bottom: 0;
right: calc(30% - 150px);
`

const Item = styled.img.attrs({
  src: (props) => props.url
})`
width: 100px;
height: 100px;`
