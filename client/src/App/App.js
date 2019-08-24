import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery';
import ItemView from '../ItemView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/item" component={ItemView}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
