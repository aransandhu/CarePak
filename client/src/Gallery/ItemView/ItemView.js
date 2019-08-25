import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, IconButton, TextField, Card } from '@material-ui/core';
import styled from 'styled-components';

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
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="apple.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="strawberry.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $12
                      </Typography>
                    </Description>
                    <Item url="robot.png" className="item-img"/>
                  </ItemCard>
                </Grid>
                <Grid item xs={4}>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="groceries.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard disabled>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="milk.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard disabled>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="teeth-brushing.png" className="item-img"/>
                  </ItemCard>
                </Grid>
                <Grid item xs={4}>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="teddy-bear.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="tomato.png" className="item-img"/>
                  </ItemCard>
                  <ItemCard>
                    <Description className="desc">
                      <Typography variant="subtitle1" style={{fontWeight: '700'}}>Apple</Typography>
                      <Typography variant="subtitle2">
                        An apple a day keeps the doctor away.
                      </Typography>
                      <Typography variant="subtitle2" style={{fontWeight: '700'}}>
                        Click to buy: $1
                      </Typography>
                    </Description>
                    <Item url="water.png" className="item-img"/>
                  </ItemCard>
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

const ItemCard = styled.div `
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};

  .item-img {
    width: 12vh;
    height: auto;
    margin: 2vh calc(16.5% - 6vh);
    cursor: pointer;
    opacity: ${(props) => props.disabled ? 0.3 : 1};
  }

  .desc {
    width: 24vh;
    opacity: 0;
    margin-top: 18vh;
    padding: 0.2rem;
    margin-left: -6vh;
    /* height: 12vh; */
    position: absolute;
    background: white;
    border: 1px solid rgba(50,50,255,0.5);
    text-align: center;
    border-radius: 5%;
    pointer-events: none;
    z-index: 999999999;
    box-shadow: 12px 7px 70px -19px rgba(50,50,255,0.1);
  }

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  &:hover {
    .desc {
      display: block;
      opacity: 1;
      animation-name: bounceIn;
      animation-duration: 0.2s;
    }
    .item-img {
      width: 16vh;
      margin: 0vh calc(16.5% - 8vh);
    }
  }
`

const Item = styled.img.attrs({
  src: (props) => '../iconset/' + props.url
})`
`

const Description = styled.div `
`
