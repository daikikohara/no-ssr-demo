import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {
  Home,
  About
} from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Default title" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
