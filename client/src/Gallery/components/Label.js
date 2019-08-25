import React, { Component } from 'react';
import styled from 'styled-components';

export default class Label extends Component {
  render() {
<<<<<<< HEAD
    const { tag, from, to } = this.props;

    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Tag from={from} to={to}>{tag}</Tag>
=======
      <Tag>{tag}</Tag>
>>>>>>> ??:
=======
      <Tag from={from} to={to}>{tag}</Tag>
>>>>>>> label
=======
    const { tag } = this.props;

    return (

>>>>>>> setup label
    )
  }
}

const Tag = styled.div `
  -webkit-appearance: none;
<<<<<<< HEAD
  background: -webkit-gradient(to right,${(props) => props.from} 0%, ${(props) => props.t0} 100%);
  background: linear-gradient(to right,${(props) => props.from} 0%, ${(props) => props.to} 100%);
  border: none;
  border-radius: 0.6rem;
  display: inline-block;
  box-shadow: 0 .2rem .5rem rgba(0,0,0,.15);
  color: white;
  cursor: pointer;
<<<<<<< HEAD
<<<<<<< HEAD
  font-size: 0.8em;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1.4rem;
  text-align: left;
  margin-right: 1rem;
  padding: 0.2rem 1rem 0rem 1rem;
=======
  font-size: 0.6em;
=======
  font-size: 0.8em;
>>>>>>> label
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1.4rem;
  text-align: left;
<<<<<<< HEAD
>>>>>>> ??:
=======
  margin-right: 1rem;
  padding: 0.4rem 1rem 0rem 1rem;
>>>>>>> label
=======
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
>>>>>>> setup label
`
