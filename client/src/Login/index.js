import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, IconButton, TextField } from '@material-ui/core';

export default class Login extends Component {

  render() {

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          Sign up to Donate
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Sign up to Donate</Typography>
          <TextField
            id="outlined-password-input"
            label="First Name"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Last Name"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Username"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Email"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
}
