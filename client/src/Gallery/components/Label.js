import React, { Component } from 'react';
import styled from 'styled-components';

export default class Label extends Component {
  render() {
    const { tag } = this.props;

    return (

    )
  }
}

const Tag = styled.div `
  -webkit-appearance: none;
  background: -webkit-gradient(to right,#52ccc4 0%, #ee786e 100%);
  background: linear-gradient(to right,#52ccc4 0%, #ee786e 100%);
  border: none;
  border-radius: 10%;
  box-shadow: 0 .2rem .5rem rgba(0,0,0,.15);
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1rem;
  width: 6rem;
  text-align: left;
  padding: 0.8rem 0 0.6rem 1rem;
`
