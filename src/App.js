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
      searchText: '',
      gallery: []
    };
  }

  // Update state with data response from the server, use data from The Flickr API Key, and catch any errors.
  componentDidMount() {
    this.performSearch('');
  }

  performSearch = (query) => {
    if (this.state.searchText !== query) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          console.log(response.data);
          this.setState({
            searchText: query,
            gallery: response.data.photos.photo //access the API data array
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
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
                <Route exact path="/" render={props => <Gallery title="Gallery Search" searchText={this.state.searchText} data={this.state.gallery}{...props} />} />
                <Route exact path="/performSearch/:query" render={props => { 
                  this.performSearch(props.match.params.query)
                  return (<Gallery  searchText={props.match.params.query} search={this.performSearch} data={this.state.gallery}{...props} />)
                }} />
                <Route component={NotFound} />
              </Switch>
          {/* <Gallery /> */}
        </div>
      </BrowserRouter>
    );
  }
}





