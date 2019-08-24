import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Package extends Component {
  render() {
    return (
        <Grid container item xs={4}>
          <Card>
            <CardActionArea>
              {/* <CardMedia
                image="/closed_box.png"
                title="Contemplative Reptile"
              /> */}
              <Box/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
    );
  }
}
export default Package;

const Box = styled.img.attrs({
  src: 'closed_box.png'
})`
width: 100px;
height: 100px;`