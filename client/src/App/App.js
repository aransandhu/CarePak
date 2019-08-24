import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Gallery} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
