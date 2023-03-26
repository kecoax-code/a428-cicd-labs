import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Submission!</h1>
        </header>
        <p className="App-intro">
            Proyek Membangun CI/CD Pipeline dengan Jenkins
        </p>
      </div>
    );
  }
}

export default App;
