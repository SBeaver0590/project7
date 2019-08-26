import React, { Component } from 'react';
import Picture from './Picture';
// import NotFound from './NotFound';



class Gallery extends Component {
    
    pictures = props => { //give me images with props(farm, server, id, secret)
        
        const results = props.data;
        let NotFound = results.map(currentPicture => <Picture key={currentPicture.id} url={`https://farm${currentPicture.farm}.staticflickr.com/${currentPicture.server}/${currentPicture.id}_${currentPicture.secret}.jpg`}/>);
        if(results.length > 0 ){
            
        }else{
        return NotFound;
        }
    }
    
    render() { //show those pictures on the page.

        // makes the nav links work as well as being able to type it in the URL
        if(this.props.searchText !== this.props.query) {
            this.props.history.push(`/performSearch/${this.props.query}`); 
            this.props.search(this.props.query);
        }
        
        return ( //Return the new data
            <div className="photo-container">
                <h2>{this.props.searchText}</h2>
                <ul>
                {this.pictures(this.props)}  
                </ul> 
            </div>
        );
        
    }
}

export default Gallery;