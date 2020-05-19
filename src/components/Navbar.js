import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/todo">Todo</NavLink></li>
            </ul>
        </nav>
    )
}
export default withRouter(Navbar);

