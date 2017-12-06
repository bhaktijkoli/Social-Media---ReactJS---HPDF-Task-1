import React, { Component } from 'react';

import Post from "./Post"


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: window.data.posts
    }
  }
  render() {
    return (
      <div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default PostList;
