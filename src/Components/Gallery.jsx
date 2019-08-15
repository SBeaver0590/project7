import React, { Component } from 'react';
import Picture from './Picture';

class Gallery extends Component {
    
    constructor(props) {
        super(props);
    
        const Picture = [];
    
        for (let i = 0; i < 10; i++) {
            picture.push({
                name: chance.first(),
                country: chance.country({ full: true })
            });
        }
    
        this.state = { picture };
    }
    
    render() {
        let pictures = [
            'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
            "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
            "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
            "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
        ];
        return (
            <div className="photo-container">
                <h2>{this.props.searchText}</h2>
                <ul>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    <Picture url={photoURL}/>
                    
                </ul> 
            </div>
        );

    }
}

export default Gallery;