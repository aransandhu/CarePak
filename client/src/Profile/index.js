import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Info } from './components'
import { Grid, Typography, IconButton } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter } from '@mdi/js';

class Profile extends Component {

  render() {
    const user = {
      firstName: 'Julian',
      lastName: 'Zhang',
      user: 'jay-zee'
    };

    return (
      <div style={{ padding: '1rem 5rem' }}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Info
              height='28vh'
              width='100%'
              header="Basic Info"
              icon="yes"
              content={
                <div style={{ marginTop: '1rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant='subtitle1'>{user.user}</Typography>
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
        </Grid>
      </div>
    );
  }
}

export default Profile;
