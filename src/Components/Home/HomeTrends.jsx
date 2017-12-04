import React, { Component } from 'react';

import {Card, CardHeader, CardActions, CardText, FlatButton} from 'material-ui';

class HomeTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: window.data.auth.trends
    }
  }
  render() {
    const listTrends = this.state.trends.map((trend) =>
    <li key={trend.name} className="trend"><a className="trend-title" href="#"><h3>#{trend.name}</h3></a><span className="trend-subtitle">{trend.posts}</span></li> );
    return (
      <Card initiallyExpanded={true} >
        <CardHeader
          className="card-header"
          title={<h2>Trending</h2>}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} className="card-text">
          <ul className="trent-list card-fix">
            {listTrends}

          </ul>
        </CardText>
      </Card>
    );
  }
}

export default HomeTrends;
