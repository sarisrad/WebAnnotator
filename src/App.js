import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: 1
    }
  }

  onClick(){
    this.state.counter ++;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App" onClick={this.onClick.bind(this)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter = {this.state.counter}</h2>
        </div>
        <p className="App-intro">
          my Website <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
