import React, { Component } from 'react';

import {Paper} from 'material-ui';
import {TextField, RaisedButton, IconButton} from 'material-ui';

import IconPhoto from 'material-ui/svg-icons/editor/insert-photo';
import IconVideo from 'material-ui/svg-icons/av/videocam';
import IconGif from 'material-ui/svg-icons/action/gif';
import IconPoll from 'material-ui/svg-icons/social/poll';
import IconLocation from 'material-ui/svg-icons/communication/location-on';

const buttonStyle = {
  margin: 12,
};

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.data.auth.user
    }
  }
  render() {
    return (
      <div className="row">
        <Paper className="new-post-container">
          <TextField floatingLabelText="What's happening ?" id="newpost" name="newpost" rows={1} fullWidth={true} multiLine={true}/>
          <div className="new-post-action">
            <IconButton><IconPhoto /></IconButton>
            <IconButton><IconVideo /></IconButton>
            <IconButton><IconGif /></IconButton>
            <IconButton><IconPoll /></IconButton>
            <IconButton><IconLocation /></IconButton>
            <RaisedButton className="pull-right" label="Post" primary={true} style={buttonStyle} />
          </div>
        </Paper>

      </div>
    );
  }
}

export default NewPost;
