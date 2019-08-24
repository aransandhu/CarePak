// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Home from '../Gallery/Home';
// import List from '../Gallery/List';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';

class App extends Component {
  state = {
    auth: true,
    setAuth: true,
    anchorEl: false,
    setAnchorEl: false,
    open: false,
  }

  handleChange = (e) => {
    this.setState({ auth: e.target.checked })
  }

  handleMenu = (e) => {
    this.setState({ setAnchorEl: e.currentTarget })
  }

  handleClose = () => {
    this.setState({ setAnchorEl: null })
  }

  render() {
    const { auth, anchorEl, setAnchorEl, open } = this.state;

    return (
      <div>
        <AppBar position="static" style={{ background: 'black' }}>
          <Toolbar>
            <IconButton edge="start" style={{ marginRight: '1rem' }} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              CarePak
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  edge="end"
                  style={{marginLeft: '85vw'}}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default App;
