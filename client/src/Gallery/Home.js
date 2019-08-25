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
      filterId : 1,
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
      self.setState({packageList: response.data}, () => {console.log(response.data)})
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
    
      axios({
        method: 'post',
        url: newFilterId === 1 ? '/global/' : '/globalpopular/',
        data: newFilterId === 1 ? {location: 'Toronto'} : {}
      })
      .then(function (response) {
        // handle success
        self.setState({packageList: response.data}, () => console.log(self.state.packageList))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
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
