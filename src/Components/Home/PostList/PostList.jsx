import React, { Component } from 'react';

import Post from "./Post"

import Loader from "./../../Loader/Loader"


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: window.data.posts
    }
  }
  componentDidMount() {
    setTimeout(function () {
      this.setState({loading:false})
    }.bind(this), 1000);
  }
  render() {
    const listTrends = this.state.posts.map((post) =>
    <Post key={post.name} post={post}/>);
    return (
      <Loader loading={this.state.loading}>
        {listTrends}
      </Loader>
    );
  }
}

export default PostList;
