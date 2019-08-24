import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemView } from './components'

export default class Package extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/package" component={ItemView} />
        <Route
          path="/package/:id"
          render={(props) => {
            const id = 34;

            return <ItemView id={id} {...props} />
          }}
        />
      </Switch>
    );
  }
}
