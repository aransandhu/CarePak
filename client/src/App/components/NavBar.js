import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'
import styled from 'styled-components';

export default class NavBar extends Component{
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
        <IconButton
          style={{ float: 'right', marginRight: '1rem' }}
        >
          <AccountCircle style={{color: `${textColor}`, fontSize: '2rem'}}/>
        </IconButton>
        <h1>CarePak</h1>
      </Bar>
    );
  }
}

const Bar = styled.div`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  height: 3.5rem;
  position: sticky;
  top: 0;
  z-index: 999999;
  -webkit-transition: ease 0.5s; /* Safari prior 6.1 */
  transition: ease 0.5s;

  h1 {
    padding-top: 0.5rem;
    margin-left: ${(props) => props.scrolled ? '2vw' : 'calc(50vw - 4.5rem)'};
    transition-property: margin-left;
    transition-duration: 0.7s;
  }
`
