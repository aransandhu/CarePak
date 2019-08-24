import React, { Component } from 'react';
import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components'
import PropTypes from 'prop-types';

class Info extends Component {
  render() {
    const { header, content, height, width, icon } = this.props;

    return (
      <Card
        style={{
          height: `${height}`,
          width: `${width}`,
          border: '1px solid rgba(50, 50, 50, 0.2)',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '2rem'
        }}
      >
        <Head><Typography variant='subtitle1' style={{fontWeight: '600'}}>{header}</Typography></Head>
        <Content>
          {icon && <Icon />}
          {content}
        </Content>
      </Card>
    );
  }
}

export default Info;

Info.propTypes = {
  icon: PropTypes.string
}

Info.defaultProps = {
  icon: '',

}

const Head = styled.div`
  padding: 0.5rem 0.7rem 0.3rem 0.5rem;
  border-bottom: 1px solid rgba(50, 50, 50, 0.2);
  background: rgba(200, 200, 200, 0.3);
`

const Icon = styled.div`
  height: 7rem;
  width: 7rem;
  float: left;
  margin-right: 1rem;
  border: 1px solid #EEEEEE;
`

const Content = styled.div`
  padding: 0.7rem;
`
