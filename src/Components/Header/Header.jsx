import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {AppBar, FlatButton, IconButton, IconMenu, MenuItem, Avatar} from 'material-ui';

import './Header.css'

class Header extends Component {
  render() {
    const rightButtons = (
      <div className="container">
        <div className="appbar-links">
          <Link to="/"><FlatButton label="Home" className="appbar-btn"/></Link>
          <Link to="/search"><FlatButton label="Search" className="appbar-btn"/></Link>
          <Link to="/about"><FlatButton label="About" className="appbar-btn"/></Link>
          <IconMenu className="pull-right"iconButtonElement={<IconButton className="appbar-btn"><Avatar src="http://via.placeholder.com/40x40" /></IconButton>}>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          </div>
        </div>
      );

      return (
        <AppBar
          title={rightButtons}
          showMenuIconButton={false}
        />
      );
    }
  }

  export default Header;
