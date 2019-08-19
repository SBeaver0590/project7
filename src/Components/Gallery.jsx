import React, { Component } from 'react';
import Picture from './Picture';

class Gallery extends Component {
    
    // constructor(props) {
    //     super(props);
    
    // }
    
    render() {
        let pictures = [
            {
                farm: 5,
                server: 4334,
                id: 37032996241,
                secret: "4c16a9b530"
            },
            {
                farm: 5,
                server: 4342,
                id:36338751244,
                secret: "316b6ee54b"
            },
            {
                farm: 5,
                server: 4343,
                id: 37175099045,
                secret: "0d3a249629"
            },
            {
                farm: 5, 
                server: 4425,
                id: 36337012384,
                secret: "ba3365621e"
            }
            
        ];
        pictures = pictures.map(currentPicture => <Picture key={currentPicture.id} url={`https://farm${currentPicture.farm}.staticflickr.com/${currentPicture.server}/${currentPicture.id}_${currentPicture.secret}.jpg`}/>);
        return (
            <div className="photo-container">
                <h2>{this.props.searchText}</h2>
                <ul>
                {pictures}  
                    
                </ul> 
            </div>
        );

    }
}

export default Gallery;