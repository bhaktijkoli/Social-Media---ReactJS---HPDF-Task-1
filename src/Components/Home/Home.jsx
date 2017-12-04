import React, { Component } from 'react';

import HomeUserProfile from './HomeUserProfile'
import HomeTrends from './HomeTrends'

import {Paper, Avatar} from 'material-ui';


class Home extends Component {
  render() {
    return (
      <div className="container main-content">
        <div className="row">
          <div className="col-sm-3">
            <HomeUserProfile/>
            <HomeTrends/>
          </div>
          <div className="col-sm-6">
            {/* Posts here */}
          </div>
          <div className="col-sm-3">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
