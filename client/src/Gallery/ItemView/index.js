import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, Card } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import ItemCard from './ItemCard'

import axios from 'axios';

class ItemView extends Component {
  constructor(props){
    super(props);

    this.state = {
      package: null,
      packageItems: [],
    }
  }

  componentDidMount(){
    var self = this;

    axios.post('/boxInfo/', {
      packageID: this.props.packageNum,
    })
    .then(function (response) {
      // handle success
      self.setState({package: response.data[0]}, () => {console.log(response.data[0])})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    axios.post('/boxItems/', {
      packageID: this.props.packageNum,
    })
    .then(function (response) {
      // handle success
      self.setState({packageItems: response.data}, () => {console.log(response.data)})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    axios.post('/topBoxType/', {
      packageID: this.props.packageNum,
    })
    .then(function (response) {
      // handle success
      self.setState({boxTags: response.data[0]}, () => {console.log(response.data[0])})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    }); 
  }


  render() {
    return (
      <div style={{height: '92vh'}}>
        {this.state.package !== null && this.state.boxTags != null && <Grid container spacing={3} style={{width: '98vw' }}>
          <Grid item xs={5}>
            {console.log(this.state.package)}
            <div style={{padding: '3.5rem 2rem'}}>
              <Typography variant="h4" style={{ fontWeight: '700'}}>Donate to {this.state.package.Title}</Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              {this.state.package.CharityName}
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              <Chip label={this.state.boxTags.Category}/>
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              {this.state.package.Description}
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
                Hover over items on the right to see description and prices.
              </Typography>
              <Button style={{marginTop: '2rem'}} variant="contained" color="primary" onClick={() => this.props.history.push('/')}>
                Go Back
              </Button>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Card
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              marginTop: '4vh',
              height: '54vh',
              padding: '4vh 0 10vh 0'
            }}>
              <Grid container spacing={0} style={{ marginLeft: '5rem'}}>
                <Grid item xs={4}>
                {this.state.packageItems.slice(0, 3).map((item) => 
                    <ItemCard
                    title={item.Name}
                    description=""
                    price={item.CurPrice}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                {this.state.packageItems.slice(3, 6).map((item) => 
                    <ItemCard
                    title={item.Name}
                    description=""
                    price={item.CurPrice}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                {this.state.packageItems.slice(6).map((item) => 
                    <ItemCard
                    title={item.Name}
                    description=""
                    price={item.CurPrice}
                    />
                  )}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>}
        <Box/>
      </div>
    );
  }
}

export default ItemView;

const Box = styled.img.attrs({
  src: '../open_box.png'
})`
width: 280px;
height: 250px;
position: absolute;
bottom: 0;
right: calc(31% - 140px);
`

const Back = styled.div `
  background-image: linear-gradient(to right, #4CB8C4 0%, #3CD3AD 51%, #4CB8C4 100%);
  height: 5vh;
  width: 10vw;
  color: white;
  &:hover {
    cursor: pointer;
    background-position: center;
  }
`
