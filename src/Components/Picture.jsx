import React, { Component } from 'react';

class Picture extends Component { //replace the old data with new data from the search and render it to the DOM
    render() {
        return (
            <li><img src={this.props.url} alt=''></img></li>
        );
    }
}

export default Picture;