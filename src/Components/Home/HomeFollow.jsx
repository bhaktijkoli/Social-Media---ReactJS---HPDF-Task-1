import React, { Component } from 'react';

import {Card, CardHeader, CardActions, CardText, FlatButton} from 'material-ui';
import {List, Subheader, ListItem, Divider, Avatar, IconMenu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import FontIcon from 'material-ui/FontIcon';

class HomeFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: window.data.auth.suggestions
    }
  }


  render() {
    const listSuggestions = this.state.suggestions.map((s) =>
    <div key={s.name}>
      <ListItem
        hoverColor="transparent"
        leftAvatar={<Avatar src={s.avatar} />}
        rightIconButton={<IconButton><FontIcon className="material-icons">close</FontIcon></IconButton>}
        primaryText={
          <div className="list-primary-text">
            <span>{s.name}</span>
            <small>@{s.address}</small>
          </div>
        }
        secondaryText={
          <FlatButton label="follow" primary={true}/>
        }
        secondaryTextLines={2}
      />
       <Divider /> </div>);

      return (
        <Card initiallyExpanded={true} >
          <CardHeader
            className="card-header"
            title={<h2>Follow now</h2>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true} className="card-text">
            <List>
              {listSuggestions}
            </List>
          </CardText>
        </Card>
      );
    }
  }

  export default HomeFollow;
