import React from 'react';
import Gallery from './Gallery';
import NotFound from './NotFound';

const GalleryList = props => {

    const results = props.data;
    // Generate a url mapping for all the photos in results
    let gallery; 
      if (results.length > 0 ) {
        gallery = results.map(Gallery => <Gallery url={`https://farm${gallery.farm}.staticflickr.com/${gallery.server}/${gallery.id}_${gallery.secret}.jpg`} key={gallery.id} />);
        
      } else {
        gallery = <NotFound />
      }

    return(
        <ul className="gallery-list">
            <Picture />
        </ul>
    );
}

export default GalleryList;