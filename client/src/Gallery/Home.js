import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import Package from './Package/Package';

import SimpleMenu from './components/SimpleMenu'


class Home extends Component {
  state = {
    selection : 1
  };

  changeFilter(filterID){
    this.setState({selection: filterID}, () => {console.log(filterID)})
  }


  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <SimpleMenu 
        changeFilter={this.changeFilter}
      >
        <MenuItem value={1} primaryText="English"  />
        <MenuItem value={2} primaryText="Spanish" />
        <MenuItem value={3} primaryText="French" />
      </SimpleMenu>

      <Grid container spacing={3}>
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