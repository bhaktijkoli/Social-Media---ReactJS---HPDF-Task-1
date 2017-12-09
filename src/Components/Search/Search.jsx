import React, { Component } from 'react';

import HomeUserProfile from './../Home/HomeUserProfile'
import HomeTrends from './../Home/HomeTrends'
import HomeFollow from './../Home/HomeFollow'
import PostList from './../Home/PostList/PostList'

class Search extends Component {
  render() {
    {/* <h1>{this.props.match.params.query}</h1> */}
    return (
      <div className="container main-content">
        <div className="row">
          <div className="col-sm-3">
            <HomeTrends/>
          </div>
          <div className="col-sm-6">
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

export default Search;
