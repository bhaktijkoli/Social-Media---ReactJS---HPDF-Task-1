import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

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
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
