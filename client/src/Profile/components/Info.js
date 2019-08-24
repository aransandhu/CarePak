import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components'
import PropTypes from 'prop-types';

class Info extends Component {
  render() {
    const { header, content, height, width, icon } = this.props;

    return (
      <Card style={{ height: `${height}`, width: `${width}`, border: '1px solid #AAAAAA', background: 'rgba(255, 255, 255, 0.5)'}}>
        <Head>{header}</Head>
        {icon && <Icon />}
        hello! How are you?
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
  height: 2rem;
  border-bottom: 1px solid #AAAAAA;
  background: rgba(200, 200, 200, 0.5);
`

const Icon = styled.div`
  height: 4rem;
  width: 4rem;
  background: red;
`
