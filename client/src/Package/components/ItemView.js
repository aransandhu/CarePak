import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, IconButton, TextField, Card } from '@material-ui/core';
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
            <Card style={{ background: 'rgba(255, 255, 255, 0.4)', marginTop: '10vh', height: '70vh'}}>
              <Item url="75-bread-64px.png" />
              <Item url="74-apple-64px.png" />
              <Item url="73-carrot-64px.png" />
              <Item url="70-chocolate-64px.png" />
              <Item url="71-milk-64px.png" />
              <Item url="72-fish-64px.png" />
              <Item url="59-perfume-64px.png" />
              <Item url="60-makeup-64px.png" />
              <Item url="58-mirror-64px.png" />
            </Card>
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
right: calc(31% - 150px);
`

const Item = styled.img.attrs({
  src: (props) => 'iconset/' + props.url
})`
width: 12vh;
height: auto;
margin: 4vh calc(16.5% - 6vh);
cursor: pointer;
&:hover {
  width: 16vh;
  margin: 2vh calc(16.5% - 8vh);
}
`
