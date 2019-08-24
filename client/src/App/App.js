import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery';
import Package from '../Package';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Gallery} />
          <Route path="/package" component={Package} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
