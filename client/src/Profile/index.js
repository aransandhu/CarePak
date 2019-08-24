import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Info } from './components'

class Profile extends Component {
  render() {
    return (
      <div style={{ padding: '5rem' }}>
        <Info
          height='10rem'
          width='15rem'
          header="nihaoma"
          icon="yes"
        />
        First Last
        username
        icons for social media

        User tags


        Purchase history
      </div>
    );
  }
}

export default Profile;
