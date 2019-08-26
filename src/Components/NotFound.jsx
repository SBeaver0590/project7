import React from 'react';
//import PropTypes from 'prop-types';

const NotFound = props => { //if no images are found from the search print So sorry, No images found.
    return (
        <li className="not-found">
           <i className="material-icons icon-photo"></i>
           <h3>So sorry, no images found</h3>
        </li>
    );
};


export default NotFound;