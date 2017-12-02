import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

import './Header.css'

class Header extends Component {
  render() {
    const rightButtons = (
      <div className="nav-right container">
        <FlatButton label="Home" className="nav-btn"/>
        <FlatButton label="About" className="nav-btn"/>
      </div>
    );

    return (
      <AppBar
        title="Social Media"
        showMenuIconButton={false}
        iconElementRight={rightButtons}
      />
    );
  }
}

export default Header;
