// import React, { Component } from 'react';

// import { Route, Switch } from 'react-router-dom';
// import {
//  AppBar,
//  Toolbar,
//  IconButton,
//  Typography,
//  Menu,
//  MenuItem,
// } from '@material-ui/core';
// import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';

// class NavBar extends Component{
    
//     render(){
//         return(
//             <AppBar position="static" style={{ background: '#303C6C' }}>
//             <Toolbar>
//               <IconButton edge="start" style={{ marginRight: '1rem' }} color="inherit" aria-label="menu">
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6">
//                 CarePak
//               </Typography>
//                 <div>
//                   <IconButton
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     onClick={this.handleMenu}
//                     color="inherit"
//                     edge="end"
//                     style={{marginLeft: '85vw'}}
//                   >
//                     <AccountCircle />
//                   </IconButton>
//                   <Menu
//                     id="menu-appbar"
//                     anchorEl={}
//                     anchorOrigin={{
//                       vertical: 'top',
//                       horizontal: 'right',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                       vertical: 'top',
//                       horizontal: 'right',
//                     }}
//                     open={true}
//                     onClose={this.handleClose}
//                   >
//                     <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                   </Menu>
//                 </div>
//             </Toolbar>
//       </AppBar>
//         );
//     }
// }

// export default NavBar;