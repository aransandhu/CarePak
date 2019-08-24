import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Info } from './components'
import { Grid, Typography, IconButton, Card } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter } from '@mdi/js';
import styled from 'styled-components';

class Profile extends Component {

  render() {
    const user = {
      firstName: 'Julian',
      lastName: 'Zhang',
      user: 'jay-zee'
    };

    return (
      <div style={{ margin: '5rem 10vw 0 10vw'}}>
        <Grid container spacing={3} style={{ width: '80vw'}}>
          <Grid item xs={4}>
            <Info
              height='28vh'
              min='12rem'
              width='100%'
              header="Basic Info"
              icon="yes"
              content={
                <div style={{ marginTop: '0.5rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant='subtitle1' style={{ paddingBottom: '1rem' }}>{user.user}</Typography>
                  <IconButton
                    style={{ background: 'lightblue'}}
                    size="small"
                  >
                    <Icon path={mdiTwitter}
                      title="User Profile"
                      size={1}
                      horizontal
                      vertical
                      rotate={90}
                      color="white"
                      spin
                    />
                  </IconButton>
                  <IconButton
                    style={{ background: 'blue', marginLeft: '1rem'}}
                    size="small"
                  >
                    <Icon path={mdiFacebook}
                      title="User Profile"
                      size={1}
                      horizontal
                      vertical
                      rotate={90}
                      color="white"
                      spin
                    />
                  </IconButton>
                </div>
              }
            />
            <Info
              height='28vh'
              width='100%'
              min='12rem'
              header="Interests"
              content={
                "labels"
              }
            />
          </Grid>
          <Grid item xs={8}>
            <Info
              height='75vh'
              min='30rem'
              width='100%'
              header="Donation History"
              content={
                <Grid container spacing={3} style={{ padding: '1rem' }}>
                  <Grid item xs={2}>
                    <Item url="iconset/apple.png" />
                    <Item url="iconset/milk.png" />
                    <Item url="iconset/bodysuit.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/groceries.png" />
                    <Item url="iconset/cash.png" />
                    <Item url="iconset/broccoli.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/grapes.png" />
                    <Item url="iconset/dice.png" />
                    <Item url="iconset/feeder.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/backpack.png" />
                    <Item url="iconset/folder.png" />
                    <Item url="iconset/make-up.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/chocolate.png" />
                    <Item url="iconset/open-book.png" />
                    <Item url="iconset/pencil-case.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/notebook.png" />
                    <Item url="iconset/robot.png" />
                    <Item url="iconset/teeth-brushing.png" />
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;


const Display = styled.img.attrs({
  src: 'example_icon.png'
})`
height: 8rem;
width: 8rem;
border-radius: 50%;
float: left;
position: absolute;
left: 8vw;
top: 5rem;
border: 10px solid #436e5d;
`

const Item = styled.img.attrs({
  src: (props) => props.url
})`
  height: auto;
  width: 100%;
  cursor: pointer;
  margin-bottom: 50%;
  &:hover{
    width: 110%;
    cursor: pointer;
    margin-left: -5%;
    margin-top: -10%;
  }
`
