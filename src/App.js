
import './App.css';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';


import React, { Component } from 'react';

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
