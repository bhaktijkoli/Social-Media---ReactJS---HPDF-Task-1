import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
        <Route exact path="/" component={Home}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
