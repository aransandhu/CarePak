import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, IconButton, TextField } from '@material-ui/core';
import styled from 'styled-components';

export default class Login extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  }

  render() {

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Header</Typography>
        </Grid>
        <Grid item xs={6}>
          <Form>
            <Typography variant="h4">Get started today!</Typography>
            <Typography variant="subtitle1">slfkhsldkfhlskhj</Typography>
            <TextField
              id="outlined-password-input"
              label="First Name"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-password-input"
              label="Last Name"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-password-input"
              label="Username"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-password-input"
              label="Email"
              type="password"
              autoComplete="current-password"
              margin="dense"
              variant="filled"
              style={{ width: '100%' }}
            />
          </Form>
        </Grid>
      </Grid>
    );
  }
}

const Form = styled.div`
  margin-top: 5rem;
  width: 80%;
`
