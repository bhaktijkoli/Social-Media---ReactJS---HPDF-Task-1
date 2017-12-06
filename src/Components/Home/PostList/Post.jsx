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
          <MenuItem primaryText="Mute @" />
          <MenuItem primaryText="Block @" />
          <MenuItem primaryText="Remove Post from timeline" />
          <MenuItem primaryText="Report Post" />
          <Divider/>
          <MenuItem primaryText="Add to new Movement" />
        </IconMenu>
      )
      const title = (
        <div>
          <span>Title</span>
          {iconMenu}
        </div>
      )
      return (
        <div className="row">
          <Card>
            <CardHeader
              className="post-header"
              title={title}
              subtitle="Subtitle"
              avatar="/images/avatar/baruto.jpg"
            />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardMedia>
              <img src="images/uploads/maxresdefault.jpg" alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton label="12" icon={<IconComment/>}/>
              <FlatButton label="0" icon={<IconRepeat/>}/>
              <FlatButton label="52" icon={<IconFavorite/>}/>
              <FlatButton icon={<IconChat/>}/>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  export default Post;
