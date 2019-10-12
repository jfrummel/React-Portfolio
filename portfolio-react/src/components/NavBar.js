import React from 'react';
import { NavLink } from 'react-router-dom';
import "../scss/NavBar.scss";


const NavBar = () => {
    return ( 
        <div className="container-fluid" id="menu">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav"  id="top-menu">
                        <NavLink exact to="/" activeClassName="active-link"className="nav-item nav-link link">Home</NavLink>
                        <NavLink to="/about" activeClassName="active-link" className="nav-item nav-link link">About</NavLink>
                        <NavLink to="/projects" activeClassName="active-link" className="nav-item nav-link link">Projects</NavLink>
                        <NavLink to="/contact" activeClassName="active-link" className="nav-item nav-link link">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;
