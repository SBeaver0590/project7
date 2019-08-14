// Import the search, nav, gallery from the .jsx files
import './App.css';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
//import apiKey from './Components/config';

import React, { Component } from 'react';
//let test= apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gallery: []
    };
  }

  componentDidMount () {
    axios.get('')
    .then(response => {
      this.setState({
        gallery: response.data.data
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    console.log(this.state.gallery);
    return (
      <div>
        <Search />
        <Nav />
        <Gallery />
      </div>
    );
  }
}




