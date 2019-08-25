import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Done } from '@material-ui/icons'

class ItemCard extends Component {
  getNameinHuman = (s) => {
    const k = s.split("_")
    let human = ''
    let c = 1
    for (var i of k) {
      human += (i.slice(0, 1).toUpperCase() + i.slice(1))

      if (c !== k.length) {
        human += ' '
      }

      c += 1
    }

    return human
  }

  render() {
    const { disabled, description, title, price } = this.props;

    return (
      <Card disabled={disabled}>
        {disabled && <Done fontSize="large" className="indicate"/>}
        <Description className="desc">
          <Typography variant="subtitle1" style={{fontWeight: '700'}}>
            {this.getNameinHuman(title)}
          </Typography>
          <Typography variant="subtitle2">
            {description}
          </Typography>
          <Typography variant="subtitle2" style={{fontWeight: '700'}}>
            {`Click to buy: $${price}`}
          </Typography>
        </Description>
        <Item url={title} className="item-img"/>
      </Card>
    )
  }
}

export default withRouter(ItemCard);

const Card = styled.div`
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};

  .indicate {
    color: #32CD32;
    position: absolute;
    margin: 8vh 0 0 6vh;
    font-size: 3rem;
  }

  .item-img {
    width: 12vh;
    height: auto;
    margin: 2vh calc(16.5% - 6vh);
    cursor: pointer;
    opacity: ${(props) => props.disabled ? 0.3 : 1};
  }

  .desc {
    width: 24vh;
    opacity: 0;
    margin-top: 18vh;
    padding: 0.2rem;
    margin-left: -6vh;
    /* height: 12vh; */
    position: absolute;
    background: white;
    border: 1px solid rgba(50,50,255,0.5);
    text-align: center;
    border-radius: 5%;
    pointer-events: none;
    z-index: 999999999;
    box-shadow: 12px 7px 70px -19px rgba(50,50,255,0.1);
  }

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  &:hover {
    .desc {
      display: block;
      opacity: 1;
      animation-name: bounceIn;
      animation-duration: 0.2s;
    }
    .item-img {
      width: 16vh;
      margin: 0vh calc(16.5% - 8vh);
    }
  }
`

const Item = styled.img.attrs({
  src: (props) => '../iconset/' + props.url + '.png'
})`
`

const Description = styled.div `
`
