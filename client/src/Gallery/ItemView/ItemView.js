import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, Card } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons'
import styled from 'styled-components';
import ItemCard from './ItemCard'

export default class ItemView extends Component {
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
              <Back onClick={() => this.props.history.push('/')}>
                <ArrowBack style={{position: 'absolute', marginLeft: '-2.4rem', marginTop: '-0.1rem'}}/>
                Click to go Back
              </Back>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Card
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(50, 50, 255, 0.05)',
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
  background: -webkit-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%);
  background: linear-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%);
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
  height: 1.6rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 13rem;
  margin-top: 5rem;
  margin-left: calc(85% - 12rem);
  text-align: center;
  padding: 0.8rem 0 0.6rem 1rem;
  background-position: 0% 50%;
  transition: background-position 1.5s;

  &:hover {
    transition: background-position 1.5s;
    background-position: 100%;
  }
`
