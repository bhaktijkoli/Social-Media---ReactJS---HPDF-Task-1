import React, { Component } from 'react';

import {Card, CardHeader, CardActions, CardText, FlatButton, ListItem, List, Divider} from 'material-ui';

class HomeTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: window.data.auth.trends
    }
  }
  render() {
    const listTrends = this.state.trends.map((trend) =>
      <ListItem
        className="list-trends"
        key={trend.name}
        hoverColor="transparent"
        primaryText={
          <span className="list-primary-text">#{trend.name}</span>
        }
        secondaryText={
          <span>{trend.posts}</span>
        }
        secondaryTextLines={2}
      />);
    return (
      <Card initiallyExpanded={true} >
        <CardHeader
          className="card-header"
          title={<h2>Trending</h2>}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} className="card-text">
          <List>
            {listTrends}
          </List>
        </CardText>
      </Card>
    );
  }
}

export default HomeTrends;
