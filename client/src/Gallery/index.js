import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import List from './List';

class Gallery extends Component {
  render() {
    return (
      <div style={{ height: '90%', position: 'relative' }}>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/list" component={List} /> */}
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default Gallery;