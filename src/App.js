// Import the search, nav, gallery from the .jsx files
// Imported components
import './App.css';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
// import GalleryList from './Components/GalleryList';
import apiKey from './Components/config';
import axios from 'axios'
import React, { Component } from 'react';
import NotFound from './Components/NotFound';
//let test= apiKey;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gallery: []
    };
  }

  // Update state with data response from the server, use data from The Flickr API Key, and catch any errors.
  // componentDidMount() {
  //   this.performSearch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=statues&per_page=24&format=json&nojsoncallback=1`);
  // }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchText}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gallery: response.galleries.gallery
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <div className="container">
            <h1>Picture Search</h1>
          </div>
        </div>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav isTrue={this.isTrue} onClick={this.performSearch} />
              <Switch>
                <Route exact path="/" render={props => <Gallery title="Gallery Search" data={this.state.gallery}{...props} />} />
                <Route exact path="/performSearch/:query" render={props => <Gallery search={this.performSearch} data={this.state.gallery}{...props} />} />
                <Route component={NotFound} />
              </Switch>
          {/* } */}
        </div>
      </BrowserRouter>
    );
  }
}





