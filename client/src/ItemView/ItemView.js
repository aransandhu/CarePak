import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Grid, Typography, Card } from '@material-ui/core';
import styled from 'styled-components';
import ItemCard from './ItemCard'

class ItemView extends Component {
  render() {

    return (
      <div style={{height: '92vh'}}>
        <Grid container spacing={3} style={{width: '98vw' }}>
          <Grid item xs={5}>
            <div style={{padding: '7rem 2rem'}}>
              <Typography variant="h4" style={{ fontWeight: '700'}}>Donate to Charity of Ryan</Typography>
              <Typography variant="subtitle1" style={{marginTop: '2rem'}}>
                The charity of Ryan is a blablaThe charity of Ryan is a blablaThe charity of
                Ryan is a blablaThe charity of
                 Ryan is a blablaThe charity of Ryan is a blablaThe charity of Ryan is a blabla
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '2rem'}}>
                Hover over any item on the right to see description and prices.
              </Typography>
              <Back>Click to go Back</Back>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Card
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              marginTop: '4vh',
              height: '54vh',
              padding: '4vh 0 10vh 0'
            }}>
              <Grid container spacing={0} style={{ marginLeft: '5rem'}}>
                <Grid item xs={4}>
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                </Grid>
                <Grid item xs={4}>
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="baby_toys"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                </Grid>
                <Grid item xs={4}>
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                  <ItemCard
                    title="apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Box />
      </div>
    );
  }
}

export default withRouter(ItemView);

const Box = styled.img.attrs({
  src: '../open_box.png'
})`
width: 280px;
height: 250px;
position: absolute;
bottom: 0;
right: calc(31% - 140px);
`

const Back = styled.div `
  -webkit-appearance: none;
  background: -webkit-gradient(to right,#a2ccb6 0%,#fceeb5 50%,#ee786e 100%);
  background: linear-gradient(to right,#a2ccb6 0%,#fceeb5 50%,#ee786e 100%);
  background-size: 500%;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 3rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 12rem;
  margin-top: 3rem;

  @keyframes gradient {
    0% {
      background-position: 0% 50%
    }
    100% {
      background-position: 100%
    }
  }

  &:hover {
    animation-name: gradient;
    -webkit-animation-name: gradient;
    animation-duration: 2s;
    -webkit-animation-duration: s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
`
