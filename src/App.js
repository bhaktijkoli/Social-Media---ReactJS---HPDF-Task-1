import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import './bootstrap-grid.css';

import './data'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
