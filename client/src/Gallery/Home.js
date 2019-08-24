import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from "react-router";

import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
    const { history } = this.props;
    return (
    <div className="App" style={{marginTop: '3rem'}}>
      {/* <NavBar></NavBar> */}
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
export default withRouter(Home);
