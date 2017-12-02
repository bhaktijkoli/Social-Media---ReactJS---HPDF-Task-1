import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
