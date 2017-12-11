import React, { Component } from 'react';

import HomeUserProfile from './HomeUserProfile'
import HomeTrends from './HomeTrends'
import HomeFollow from './HomeFollow'
import NewPost from './NewPost'
import PostList from './PostList/PostList'

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
            <NewPost/>
            <PostList/>
            {/* Posts here */}
          </div>
          <div className="col-sm-3">
            <HomeFollow/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
