import React, { Component } from 'react';

class Picture extends Component {
    render() {
        return (
            <li><img src={this.props.url} alt=''></img></li>
        );
    }
}

export default Picture;