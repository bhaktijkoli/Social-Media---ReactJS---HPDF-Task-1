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
    const listTrends = this.state.posts.map((post) =>
    <Post key={post.name} post={post}/>);
    return (
      <div>
        {listTrends}
      </div>
    );
  }
}

export default PostList;
