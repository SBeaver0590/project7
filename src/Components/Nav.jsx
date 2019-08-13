import React from 'react';
import ReactDom from 'react-dom'
// import PropTypes from 'prop-types';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

const Nav = props => {
    return (
        <Router>
            <div>
                <nav class="main-nav">
                    <ul>
                        <li><NavLink to='/search'>Apples</NavLink></li>
                        <li><NavLink to='/search'>Bananas</NavLink></li>
                        <li><NavLink to='/search'>Oranges</NavLink></li>
                        <li><NavLink to='/search'>Grapes</NavLink></li>
                        <li><NavLink to='/search'>Pinapples</NavLink></li>
                    </ul>
                </nav>   
            </div>
        </Router>
    );
};

ReactDOM.render(routing, document.getElementById('root'))
// Nav.propTypes = {
    
// };

export default Nav;