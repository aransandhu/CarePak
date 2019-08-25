import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { Info, Label } from './components';
import NavBar from './NavBar';
import { Grid, Typography, IconButton, Card } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter } from '@mdi/js';
import styled from 'styled-components';

import axios from 'axios';

import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';


class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
      userInterests: null,
      userHistory: null,
    }

  }

  padZero(int) {
    let i = (int + 1).toString()
    if (i.length === 1) {
      i = '0' + i
    }
    return i
  }

  generateValues() {
    const mos = [...Array(12).keys()]
    const days = [...Array(29).keys()]

    let values = {}

    for (var i of mos) {
      for (var j of days) {
        if (Math.floor(Math.random() * 3) === 0) {
          values[`2016-${this.padZero(i)}-${this.padZero(j)}`] =
          Math.floor(Math.random() * 2) + Math.floor(Math.random() * 4)
        }
      }
    }

    return values
  }

  renderGraph = () => {
    this.generateValues()

    const values = this.generateValues()
    const until = '2016-12-30';

    const panelColors = [
      '#EEEEEE',
      '#d6e684',
      '#8cc666',
      '#44a340',
      '#1e6823',
    ];

    let elem = document.getElementById('graph');

    ReactDOM.render(<Calendar values={values} until={until} panelColors={panelColors} style={{width: '100%'}}/>, elem)
  }

  componentDidMount() {
    var self = this;

    axios.post('/userInfo/', {
      userID: 1
    })
    .then(function (response) {
      // handle success
      self.setState({user: response.data[0]}, () => {console.log(response.data[0])})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.post('/userInterests/', {
      userID: 1
    })
    .then(function (response) {
      // handle success
      self.setState({userInterests: response.data[0]}, () => {console.log(response.data[0])})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.post('/userDonationHistory/', {
      userID: 1
    })
    .then(function (response) {
      // handle success
      self.setState({userHistory: response.data[0]}, () => {console.log(response.data[0])})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



    this.renderGraph()
  }

  render() {
    return (
      <Wrap>
        <Grid container spacing={3} style={{ width: '80vw'}}>
          <Grid item xs={4}>
            {this.state.user !== null && <Info
              height='28vh'
              min='12rem'
              width='100%'
              header="Basic Info"
              icon="yes"
              content={
                <div style={{ marginTop: '0.5rem' }}>
                  <Typography variant='h6' style={{ fontWeight: '700' }}>{this.state.user.FirstName} {this.state.user.LastName}</Typography>
                  <Typography variant='subtitle1' style={{ paddingBottom: '1rem' }}>{this.state.user.Email}</Typography>
                  <IconButton
                    style={{ background: '#38A1F3'}}
                    size="small"
                  >
                    <Icon path={mdiTwitter}
                      title="User Profile"
                      size={1}
                      color="white"
                    />
                  </IconButton>
                  <IconButton
                    style={{ background: '#3b5998', marginLeft: '1rem'}}
                    size="small"
                  >
                    <Icon path={mdiFacebook}
                      title="User Profile"
                      size={1}
                      color="white"
                    />
                  </IconButton>
                </div>
              }
            />}
            {this.state.userInterests !== null && <Info
              height='28vh'
              width='100%'
              min='12rem'
              header="Frequent Donations"
              content={
                <Label tag={this.state.userInterests.Category} from="#6fafd1" to="#7b8ad1"/>
              }
            />}
          </Grid>
          <Grid item xs={8}>
            <Info
              height='28vh'
              min='12rem'
              width='100%'
              header="Donation Frequency"
              content={
                <div id="graph"></div>
              }
            />
            <Info
              height='75vh'
              min='30rem'
              width='100%'
              header="Donation History"
              content={
                <Grid container spacing={3} style={{ padding: '1rem' }}>
                  <Grid item xs={2}>
                    <Item url="iconset/apple.png" />
                    <Item url="iconset/milk.png" />
                    <Item url="iconset/bodysuit.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/groceries.png" />
                    <Item url="iconset/cash.png" />
                    <Item url="iconset/broccoli.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/grapes.png" />
                    <Item url="iconset/dice.png" />
                    <Item url="iconset/feeder.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/backpack.png" />
                    <Item url="iconset/folder.png" />
                    <Item url="iconset/badminton_racket.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/chocolate.png" />
                    <Item url="iconset/notebook.png" />
                    <Item url="iconset/art_palette.png" />
                  </Grid>
                  <Grid item xs={2}>
                    <Item url="iconset/notebook.png" />
                    <Item url="iconset/plates.png" />
                    <Item url="iconset/canned_beans.png" />
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
      </Wrap>
    );
  }
}

export default withRouter(Profile);


const Display = styled.img.attrs({
  src: 'example_icon.png'
})`
height: 8rem;
width: 8rem;
border-radius: 50%;
float: left;
position: absolute;
left: 8vw;
top: 5rem;
border: 10px solid #436e5d;
`

const Item = styled.img.attrs({
  src: (props) => props.url
})`
  height: auto;
  width: 100%;
  cursor: pointer;
  margin-bottom: 50%;
  &:hover{
    width: 110%;
    cursor: pointer;
    margin-left: -5%;
    margin-top: -10%;
  }
`

const Wrap = styled.div`
  margin: 5rem 10vw 0 10vw;

  .calendar {
      font-family: Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif;
      width: 100%;
  }

  .calendar-wrapper {
      width: 100%;
  }

  .week {
      font-size: 9px;
      alignment-baseline: central;
      fill: #AAA;
  }

  .month {
      font-size: 10px;
      alignment-baseline: central;
      fill: #AAA;
  }
`
