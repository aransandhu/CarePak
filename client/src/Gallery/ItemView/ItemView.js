import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, Card } from '@material-ui/core';
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
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="apple.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="robot.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="strawberry.png"
                  />
                </Grid>
                <Grid item xs={4}>
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="milk.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="teeth-brushing.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="groceries.png"
                  />
                </Grid>
                <Grid item xs={4}>
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="water.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="tomato.png"
                  />
                  <ItemCard
                    title="Apple"
                    description="An apple a day keeps the doctor away."
                    price={1}
                    url="teddy-bear.png"
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
