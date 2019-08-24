import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import Package from './Package/Package';

import NavBar from '../App/components/NavBar';

import SimpleMenu from './components/SimpleMenu'


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterId : 1,
    }

    this.changeFilter = this.changeFilter.bind(this)
  }

  componentDidMount(){
    //Make initial call to API to sort by Recommended
  }

  changeFilter(filterId){
    this.setState({filterId: filterId})

    //Make another call to API to sort by Popular Nearby or Popular around the world
  }


  render() {
    return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <h1>CarePak</h1>
      {/* <Link to={'/item'}>
        <button >
            My List
        </button>
      </Link> */}
      <SimpleMenu changeFilter={this.changeFilter}/>

      <Grid container spacing={3} style={{ width: '96vw', margin: '0 2vw' }}>
        <Package packageItem={{title: "Local Charity Box"}}/>
        <Package packageItem={{title: "Local Charity Box"}}/>
        <Package packageItem={{title: "Local Charity Box"}}/>

        <Package packageItem={{title: "Local Charity Box"}}/>
        <Package packageItem={{title: "Local Charity Box"}}/>
        <Package packageItem={{title: "Local Charity Box"}}/>
      </Grid>
    </div>
    );
  }
}
export default Home;
