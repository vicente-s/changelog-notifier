import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user : {}
  }

  render() {
    return (
      <div className="App">
        <button> Release Notes </button>
      </div>
    );
  }
}

export default App;
