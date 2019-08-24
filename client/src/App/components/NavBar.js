import React, { Component } from 'react';
import { Link as RouterLink, withRouter} from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

class NavBar extends Component{
  state = {
    textColor: 'black',
    bgColor: 'rgb(250, 250, 250)',
    scrolled: false,
  }

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({textColor: 'rgb(250, 250, 250)', bgColor: '#1a232f', scrolled: true })
    } else {
      this.setState({textColor: 'black', bgColor: 'rgb(250, 250, 250)', scrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const { textColor, bgColor, scrolled } = this.state;
    return (
      <Bar bgColor={bgColor} textColor={textColor} scrolled={scrolled}>
        <IconButton style={{ float: 'right', marginRight: '1rem' }}>

         <Link component={RouterLink} to="/profile">
          <AccountCircle style={{color: `${textColor}`, fontSize: '2rem'}}/>
          </Link>
        </IconButton>
        <h1 onClick={() => this.props.history.push('/')}>CarePak</h1>
      </Bar>
    );
  }
}

export default withRouter(NavBar);

const Bar = styled.div`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  height: 3.5rem;
  position: sticky;
  top: 0;
  z-index: 999999;
  -webkit-transition: ease 0.5s; /* Safari prior 6.1 */
  transition: ease 0.5s;

  /* .searchBar {
    display: ${(props) => props.scrolled ? 'inline-block' : 'none'};
    margin: 0;
    margin-left: ${(props) => props.scrolled ? '0rem' : '-6rem'};
    transition-property: margin-left;
    transition-duration: 0.7s;
    color: rgb(250, 250, 250);
  } */

  h1 {
    color: ${(props) => props.textColor};
    margin-top: 0.5rem;
    display: inline-block;
    margin-left: ${(props) => props.scrolled ? '2vw' : 'calc(50vw - 4.5rem)'};
    transition-property: margin-left;
    transition-duration: 0.7s;
  }
`
