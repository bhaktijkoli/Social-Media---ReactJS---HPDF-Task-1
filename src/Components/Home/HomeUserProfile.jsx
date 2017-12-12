import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {Paper, Avatar} from 'material-ui';

class HomeUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.data.auth.user
    }
    console.log(this.props);
  }
  render() {
    return (
      <Paper zDepth={1} className="sidebar-component">
        <div className="profile-info-banner" style={{backgroundColor:this.props.muiTheme.palette.primary1Color}}></div>
        <Avatar className="profile-avatar" src={this.state.user.avatar} size={72}/>
        <div className="profile-content">
          <center>
            <h2 className="profile-name"><b>{this.state.user.name}</b></h2>
            <span className="profile-address">@{this.state.user.address}</span>
          </center>
          <div className="profile-action">
            <center className="profile-followers">
              <span>Folowers</span><br/>
              <span className="profile-count">{this.state.user.followers}</span>
            </center>
            <center className="profile-followers">
              <span>Following</span><br/>
              <span className="profile-count">{this.state.user.following}</span>
            </center>
          </div>
        </div>
      </Paper>
    );
  }
}

export default muiThemeable()(HomeUserProfile);
