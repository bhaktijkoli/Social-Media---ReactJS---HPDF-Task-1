import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import {FlatButton} from 'material-ui';
import {Divider} from 'material-ui';
import {IconMenu, IconButton, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import IconComment from 'material-ui/svg-icons/communication/comment';
import IconRepeat from 'material-ui/svg-icons/av/repeat';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconChat from 'material-ui/svg-icons/communication/chat';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const iconMenu = (
      <IconMenu
        className="post-right-icon"
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText="Copy link to Post" />
          <MenuItem primaryText="Embed Post" />
          <MenuItem primaryText={<span>Mute @{this.props.post.address}</span>} />
          <MenuItem primaryText={<span>Block @{this.props.post.address}</span>} />
          <MenuItem primaryText="Remove Post from timeline" />
          <MenuItem primaryText="Report Post" />
          <Divider/>
          <MenuItem primaryText="Add to new Movement" />
        </IconMenu>
      )
      const title = (
        <div>
          <span>{this.props.post.name}</span>
          {iconMenu}
        </div>
      )
      return (
        <div className="row">
          <Card className="post-card animated fadeInUp">
            <CardHeader
              className="post-header"
              title={title}
              subtitle={<span>@{this.props.post.address}&nbsp;.&nbsp;{this.props.post.time}</span>}
              avatar={this.props.post.avatar}
            />
            <CardText>
              {this.props.post.text}
            </CardText>
            <CardMedia>
              <img src={this.props.post.images[0]} alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton label={this.props.post.comments} icon={<IconComment/>}/>
              <FlatButton label={this.props.post.repost} icon={<IconRepeat/>}/>
              <FlatButton label={this.props.post.favorites} icon={<IconFavorite/>}/>
              <FlatButton icon={<IconChat/>}/>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  export default Post;
