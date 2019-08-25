import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


class SimpleMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null,
      currentFilter: "Popular Near You"
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleOpen(event) {
    this.setState({anchorEl: event.target}, () => this.setState({isOpen: true}))
  }

  handleClose() {
    this.setState({isOpen: false});
  }

  handleSelection(event) {
    this.setState({currentFilter: event.currentTarget.getAttribute("content")});
    this.props.changeFilter(event.currentTarget.getAttribute("id"));
    this.handleClose();
  }

  render(){
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => this.handleOpen(e)}>
         {this.state.currentFilter}
          <KeyboardArrowDownIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.isOpen}
          onClose={this.handleClose}
        >
          <MenuItem onClick={(e) => this.handleSelection(e)} id={1} content="Popular Near You">Popular Near You</MenuItem>
          <MenuItem onClick={(e) => this.handleSelection(e)} id={2} content="Popular Worldwide">Popular Worldwide</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu
