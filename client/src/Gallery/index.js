import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Home from './Home';
import ItemView from './ItemView';

class Gallery extends Component {
  render() {
    return (
      <div style={{ height: '90%', position: 'relative' }}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/package/:id"
                component={(props) => {
                  return <ItemView packageNum={Number(props.match.params.id)} {...props} />;
                }}
              />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default withRouter(Gallery);
