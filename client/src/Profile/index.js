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
      <div>
        <Display />
        <Grid item xs={4}>
            <Info
              height='28vh'
              width='100%'
              header="Basic Info"
              icon="yes"
              content={
<<<<<<< HEAD
<<<<<<< HEAD
                <div style={{ marginTop: '0.5rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant='subtitle1' style={{ paddingBottom: '1rem' }}>{user.user}</Typography>
=======
                <div style={{ marginTop: '1rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant='subtitle1'>{user.user}</Typography>
>>>>>>> changes
=======
                <div style={{ marginTop: '0.5rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant='subtitle1' style={{ paddingBottom: '1rem' }}>{user.user}</Typography>
>>>>>>> singup init
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
              header="Interests"
              content="Nothing here yet!"
            />
          </Grid>
          <Grid item xs={7}>
            <Info
              height='75vh'
              width='100%'
              header="Donation History"
              content="Nothing here yet!"
            />
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
