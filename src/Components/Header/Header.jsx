import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {RaisedButton} from 'material-ui';

class Header extends Component {
  render() {
    return (
    <div>
      <RaisedButton label="Default" />
    </div>
    );
  }
}

export default Header;
