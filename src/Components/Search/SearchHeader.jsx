import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Tabs, Tab} from 'material-ui';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="search-header" style={{backgroundColor: this.props.muiTheme.palette.pickerHeaderColor}}>
        <div className="container">
        <Tabs>
            <Tab label="Top"/>
            <Tab label="Latest"/>
            <Tab label="People"/>
            <Tab label="Photos"/>
            <Tab label="Videos"/>
            <Tab label="News"/>
            <Tab label="Broadcasts"/>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default muiThemeable()(SearchHeader);
