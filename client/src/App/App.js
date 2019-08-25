import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery';
import Profile from '../Profile';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
