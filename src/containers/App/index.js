import React, { Component } from 'react';
import './index.scss';

import Menu from '../menu/index';

export default class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
};

