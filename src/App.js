import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <span>
            <h1><a href="#">REACT University</a></h1>
            <ul>
              <li><a href="#" className="app-header-link">Training</a></li>
              <li><a href="#" className="app-header-link">Books</a></li>
              <li><a href="#" className="app-header-link">Posts</a></li>
              <li><a href="#" className="app-header-link">About</a></li>
              <li><a href="#" className="app-header-register">Register</a></li>
            </ul>
          </span>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
