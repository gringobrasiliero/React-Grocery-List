import React, { Component } from 'react';
import logo from './logo.svg';
import Grocery from './Containers/Grocery.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Grocery List</h1>
        </header>
        <Grocery />
      </div>
    );
  }
}

export default App;
