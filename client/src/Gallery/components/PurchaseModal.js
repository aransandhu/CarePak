import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default class PurchaseModal extends Component {
  render() {
    const { name, price, open, charity, close } = this.props;

    return (
      <Wrapper open={open}>
        <div className="modal">
          <Typography variant="h5" style={{ fontWeight: '700' }}>
            Would you like to purchase {name} from {charity}?
          </Typography>
          <Typography variant="subtitle1" style={{paddingBottom: '4rem'}}>
            Total cost will be ${price}.
          </Typography>
          <Button no onClick={close}>No</Button>
          <Button onClick={close}>Yes</Button>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div `
  display: ${(props) => props.open ? 'block' : 'none'};

  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .modal {
    display: ${(props) => props.open ? 'block' : 'none'};
    text-align: center;
    position: absolute;
    width: 38vw;
    height: 30vh;
    background: white;
    border: 1px solid black;
    margin: calc(25vh - 19vh) 0 0 calc(50vw - 19vw);
    box-shadow: 1px 3px 10px 0px rgba(0,0,0,0.32);
    border-radius: 4rem;
    border: 1px solid rgba(50, 50, 255, 0.2);
    animation-name: bounceInDown;
    animation-duration: 0.5s;
    padding: 3rem 3rem;
  }
}
`

const Button = styled.div `
  display: inline-block;
  -webkit-appearance: none;
  background: -webkit-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%);
  background: ${(props) => props.no
    ? `linear-gradient(to right,#e8553f 0%,#f5e6a6 50%,#78cbde 100%)`
    : `linear-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%)`
  };
  background-size: 500%;
  border: none;
  border-radius: 2rem;
  color: white;	  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1.6rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 6rem;
  text-align: center;
  padding: 0.4rem 0 0.2rem 0;
  background-position: 0% 50%;
  margin: 0 1rem;
  transition: background-position 1.5s;
   &:hover {
    transition: background-position 1.5s;
    background-position: 100%;
  }
`
