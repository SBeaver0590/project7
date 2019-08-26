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
// import NoMatchFound from './NoMatchFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      gallery: [],
      loading: false
    };
  }

  componentDidMount() {
    this.performSearch('');
  }

  isTrue = (istrue = true) => {
    this.setState({
      loading: istrue
    });
  }
  
  // Update state with data response from the server, use data from The Flickr API Key, and catch any errors.
  performSearch = (query) => {
    if (this.state.searchText !== query) {
      this.setState({
        searchText: query
      });
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          console.log(response.data);
          this.setState({
            // searchText: query,
            gallery: response.data.photos.photo, //access the API data array
            loading: false  
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    // this.props.history.push(`/performSearch/${query}`); 
  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <div className="container">
            <h1>Gallery Search</h1>
                <style>{'body { background-color: skyblue; }'}</style> 
          </div>
        </div>
        <div className="container">
        {
                    (this.state.loading)
                      ? <p>Loading...</p>
                      :
                  
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/performSearch/" />} />
            <Route exact path="/performSearch" render={props => { 
              return (
                <React.Fragment>
                  <Search onSearch={this.performSearch}{...props} />
                  <Nav isTrue={this.isTrue} onClick={this.performSearch} />
                </React.Fragment>
              )
            }} />
            <Route path="/performSearch/:query" render={props => { 
              // this.performSearch(props.match.params.query)
              return (
                <React.Fragment>
                  <Search onSearch={this.performSearch}{...props} />
                  <Nav isTrue={this.isTrue} onClick={this.performSearch} />
                  <Gallery  query={props.match.params.query} searchText={this.state.searchText} search={this.performSearch} data={this.state.gallery}{...props} />
                </React.Fragment>
              )
            }} /> 
            <Route component={NotFound} />
          </Switch>
        } 
        </div>
      </BrowserRouter>
    );
  }
}





