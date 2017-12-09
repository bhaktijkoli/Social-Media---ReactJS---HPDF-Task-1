import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import {AppBar, FlatButton, IconButton, IconMenu, MenuItem, Divider, Avatar} from 'material-ui';
import {TextField} from 'material-ui';

import IconSearch from 'material-ui/svg-icons/action/search';
import IconClose from 'material-ui/svg-icons/navigation/close';

import IconPerson from 'material-ui/svg-icons/social/person';
import IconList from 'material-ui/svg-icons/action/list';
import IconFlash from 'material-ui/svg-icons/image/flash-on';
import IconAssessment from 'material-ui/svg-icons/action/assessment';
import IconLaunch from 'material-ui/svg-icons/action/launch';
// import IconBuild from 'material-ui/svg-icons/action/build';
// import IconHelp from 'material-ui/svg-icons/action/help';
// import IconKeyboard from 'material-ui/svg-icons/action/keyboard';


import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.data.auth.user,
      searchBarClassName: "hidden"
    }
  }
  componentDidMount() {
    var searchInput = document.getElementById("search-input")
    searchInput.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.props.history.push("/search/"+searchInput.value);
      }
    }.bind(this));
  }

  showSearch() {
    this.setState({searchBarClassName: "animated fadeIn"})
    setTimeout(function () {
      this.refs.searchInput.focus();
    }.bind(this), 500);
  }

  hideSearch() {
    this.setState({searchBarClassName: "animated fadeOut"})
    setTimeout(function () {
      this.setState({searchBarClassName: "hidden"})
    }.bind(this), 500);
  }

  render() {
    const mainBar = (
      <div className="container">
        <div className="appbar-links">
          <Link to="/"><FlatButton label="Home" className="appbar-btn"/></Link>
          <Link to="/about"><FlatButton label="About" className="appbar-btn"/></Link>
          <IconMenu className="pull-right" iconButtonElement={<IconButton className="appbar-btn"><Avatar src={this.state.user.avatar} size={40} /></IconButton>}>
          <MenuItem primaryText="Profile" leftIcon={<IconPerson/>}/>
          <MenuItem primaryText="List" leftIcon={<IconList/>}/>
          <MenuItem primaryText="Moments"  leftIcon={<IconFlash/>}/>
          <Divider />
          <MenuItem primaryText="Ads"  leftIcon={<IconLaunch/>}/>
          <MenuItem primaryText="Analytics"  leftIcon={<IconAssessment/>}/>
          <Divider />
          <MenuItem primaryText="Settings and privacy" />
          <MenuItem primaryText="Help Cenre" />
          <MenuItem primaryText="Keyboard shortcuts" />
          <MenuItem primaryText="Log out" />
        </IconMenu>
        <IconButton className="pull-right" style={{top:'15px'}} onClick={this.showSearch.bind(this)}><IconSearch className="appbar-btn"/></IconButton>
      </div>
    </div>
  );

  const searchBar = (
    <div className="container">
      <TextField ref="searchInput" id="search-input" hintText="Type then hit enter to search..."  style={{width: '95%'}}/>
      <IconButton className="pull-right" style={{top:'12px'}} onClick={this.hideSearch.bind(this)}><IconClose /></IconButton>
    </div>
  )

  return (
    <header>
      <AppBar
        id="main-bar"
        title={mainBar}
        showMenuIconButton={false}
      />
      <AppBar
        title={searchBar}
        className={this.state.searchBarClassName}
        id="search-bar"
        showMenuIconButton={false}
      />
    </header>
  );
}
}

export default withRouter(Header);
