import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Typography, Card } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { ArrowBack } from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import ItemCard from './ItemCard'
import { Label, PurchaseModal } from '../components'

import axios from 'axios';

class ItemView extends Component {
  constructor(props){
    super(props);

    this.state = {
      package: null,
      packageItems: [],
      purchasing: {},
      open: false,
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
      self.setState({boxTags: response.data}, () => {console.log(response.data)})
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
    const { purchasing, open } = this.state;
    console.log("STATE:::", purchasing, open)

    return (
      <div style={{height: '92vh'}}>
        <PurchaseModal
          open={open}
          name={purchasing.title}
          price={purchasing.price}
          charity={purchasing.charity}
          close={() => this.setState({ purchasing: {}, open: false, })}
        />
        {this.state.package !== null && this.state.boxTags != null && <Grid container spacing={3} style={{width: '98vw' }}>
          <Grid item xs={5}>
            <div style={{padding: '3.5rem 2rem'}}>
              <Typography variant="h4" style={{ fontWeight: '700'}}>Donate to {this.state.package.Title}</Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              {this.state.package.CharityName}
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              {this.state.boxTags.map((item) => <Chip style={{margin: '1px'}} label={item.Category}/>)}
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
              {this.state.package.Description}
              </Typography>
              <Typography variant="subtitle1" style={{marginTop: '1rem'}}>
                Hover over items on the right to see description and prices.
              </Typography>
              <Back onClick={() => this.props.history.push('/')}>
                <ArrowBack style={{position: 'absolute', marginLeft: '-2.4rem', marginTop: '-0.1rem'}}/>
                Click to go Back
              </Back>
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
                      icon={item.Icon}
                      clickfxn={() => this.setState({
                        purchasing: {
                          title: item.Name, price: item.CurPrice, charity: this.state.package.CharityName
                        },
                        open: true,
                      })}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                {this.state.packageItems.slice(3, 6).map((item) =>
                    <ItemCard
                    title={item.Name}
                    description=""
                    price={item.CurPrice}
                    icon={item.Icon}
                    clickfxn={() => this.setState({
                      purchasing: {
                        title: item.Name, price: item.CurPrice, charity: this.state.package.CharityName
                      },
                      open: true,
                    })}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                {this.state.packageItems.slice(6).map((item) =>
                    <ItemCard
                    title={item.Name}
                    description=""
                    price={item.CurPrice}
                    icon={item.Icon}
                    clickfxn={() => this.setState({
                      purchasing: {
                        title: item.Name, price: item.CurPrice, charity: this.state.package.CharityName
                      },
                      open: true,
                    })}
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
  -webkit-appearance: none;
  background: -webkit-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%);
  background: linear-gradient(to right,#52ccc4 0%,#f5e6a6 50%,#ee786e 100%);
  background-size: 500%;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
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
  width: 13rem;
  margin-top: 5rem;
  margin-left: calc(85% - 12rem);
  text-align: center;
  padding: 0.8rem 0 0.6rem 1rem;
  background-position: 0% 50%;
  transition: background-position 1.5s;
   &:hover {
    transition: background-position 1.5s;
    background-position: 100%;
  }
`
