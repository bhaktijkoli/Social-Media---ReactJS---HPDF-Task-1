import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Search from './Components/Search/Search.jsx';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import './bootstrap-grid.css';

import './data'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="content-wrapper">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/search/:query" component={Search}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
