import React, { Component } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { withRouter } from "react-router";

import styled from 'styled-components';

import Link from '@material-ui/core/Link';

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

const Package = ({ packageItem, history }) => (
    <Grid item xs={4} style={{ marginTop: '5vh'}}>
      <Item onClick={() => history.push('/package/54')}>
        <Box className="box"/>
        <Card style={{zIndex: 1}}>
          <CardActionArea style={{ paddingTop: '50px'}}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {packageItem.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
              </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
);

export default withRouter(Package);

const Box = styled.div`
  width: 110px;
  height: 110px;
  position: absolute;
  z-index: 999;
  margin: -3.5% 0 0 calc(15% - 55px);
  cursor: pointer;
`

const Item = styled.div`
  width: 100%;
  cursor: pointer;

  &:hover {
    .box {
      height: 110px;
      background: url('../open_box.png');
      background-size: 110px;
      animation-duration: 0.7s;
      animation-name: bounce;
      animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
  }

  .box {
    height: 110px;
    background: url('../closed_box.png');
    background-size: 110px;
  }

  @keyframes bounce {
      0%   { transform: scale(1,1)      translateY(0); }
      10%  { transform: scale(1.1,.9)   translateY(0); }
      30%  { transform: scale(.9,1.1)   translateY(-20px); }
      50%  { transform: scale(1.05,.95) translateY(0); }
      57%  { transform: scale(1,1)      translateY(-3px); }
      64%  { transform: scale(1,1)      translateY(0); }
      100% { transform: scale(1,1)      translateY(0); }
  }

  .packageCard {
    -webkit-transition: ease 0.2s; /* Safari prior 6.1 */
    transition: ease 0.2s;
    &:hover {
      background-color: white !important;
      -webkit-transition: ease 0.2s; /* Safari prior 6.1 */
      transition: ease 0.2s;
    }
  }
`
