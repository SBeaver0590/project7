import React, { Component } from 'react';
//import ReactDom from 'react-dom'
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to='/performSearch/Apples'>Apples</NavLink></li>
                        <li><NavLink to='/performSearch/Bananas'>Bananas</NavLink></li>
                        <li><NavLink to='/performSearch/Oranges'>Oranges</NavLink></li>
                        <li><NavLink to='/performSearch/Grapes'>Grapes</NavLink></li>
                        <li><NavLink to='/performSearch/Pineapples'>Pinapples</NavLink></li>
                    </ul>
                </nav>
        );
    }
}


//ReactDOM.render(routing, document.getElementById('root'))
// Nav.propTypes = {

// };

;