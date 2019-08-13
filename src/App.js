// Import the search, nav, gallery from the .jsx files
import './App.css';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import apiKey from './config.js';

import React, { Component } from 'react';
// let test= apiKey;

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Nav />
        <Gallery />
      </div>
    );
  }
}



export default App;
