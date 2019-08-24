import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery';
import { NavBar } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Gallery} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
