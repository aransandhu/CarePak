import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import Package from './Package/Package';
import SimpleMenu from './components/SimpleMenu'


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterId : 'popular',
      loading: true,
      packageList: [],
    }

    this.changeFilter = this.changeFilter.bind(this)
  }

  componentDidMount(){
    //Make initial call to API to sort by Recommended
    // Make a request for a user with a given ID
    var self = this;

    axios.post('/popular/', {
      data: {
        location: 'Toronto',
      }
    })
    .then(function (response) {
      // handle success
      self.setState({packageList: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  changeFilter(newFilterId){
    var self = this;

    const oldId = this.state.filterId;
    if (oldId !== newFilterId){
      this.setState({filterId: newFilterId})
      if(newFilterId === 'popular' ){
        axios.post('/popular/', {
          data: {
            location: 'Toronto',
          }
        })
        .then(function (response) {
          // handle success
          self.setState({packageList: response.data})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }

      else if(newFilterId === 'worldwide'){
        axios({
          method: 'post',
          url: '/globalpopular/',
        })
        .then(function (response) {
          self.setState({packageList: response.data})})
        .catch(function (error) {
          console.log(error);
        })
      }
      else{
        axios({
          method: 'get',
          url: '/all/',
        })
        .then(function (response) {
          self.setState({packageList: response.data})})
        .catch(function (error) {
          console.log(error);
        })
      }
     
    };  
  }


  render() {
    const { packageList } = this.state;

    return (
    <div className="App" style={{marginTop: '3rem'}}>
      <Grid container justify="flex-end" >
      <SimpleMenu changeFilter={this.changeFilter}/>
      </Grid>

      <Grid container spacing={3} style={{ width: '96vw', margin: '0 2vw' }}>
        {packageList.length !== 0 && 
        packageList.map((item) => (
          <Package packageItem={item}/>
        ))
      }
      </Grid>
    </div>
    );
  }
}
export default withRouter(Home);
