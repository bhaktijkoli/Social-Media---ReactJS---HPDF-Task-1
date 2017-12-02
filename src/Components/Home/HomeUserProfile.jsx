import React, { Component } from 'react';

import {Paper, Avatar} from 'material-ui';

class HomeUserProfile extends Component {
  render() {
    return (
      <Paper zDepth={1} className="sidebar-component">
        <div className="profile-info-banner"></div>
        <Avatar className="profile-avatar" src="http://via.placeholder.com/72x72" size={72}/>
        <div className="profile-content">
          <center>
            <h2 className="profile-name"><b>Bhaktij Koli</b></h2>
            <span className="profile-address">@BhaktijKoli</span>
          </center>
          <div className="profile-action">
            <center className="profile-followers">
              <span>Folowers</span><br/>
              <span className="profile-count">5</span>
            </center>
            <center className="profile-followers">
              <span>Following</span><br/>
              <span className="profile-count">5</span>
            </center>
          </div>
        </div>
      </Paper>
    );
  }
}

export default HomeUserProfile;
