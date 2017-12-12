import React, { Component } from 'react';

import {CircularProgress} from 'material-ui';

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.loading == true) {
      return (
        <center style={{marginTop:'50px'}}>
          <CircularProgress size={80} thickness={5} />
        </center>
      );
    }
    else {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }
}

export default Loader;
