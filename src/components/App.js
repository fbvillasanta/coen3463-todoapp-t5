import React, { Component } from 'react';
import Header from './Header/header';
import Body from './Body/body';
import Login from './Login/login';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Body />
      </div>
    );
  }
};

export default App;
