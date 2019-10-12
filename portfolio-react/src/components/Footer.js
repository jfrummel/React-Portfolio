import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Footer.scss';

const Footer = () => {
    return ( 
        <footer className="container-fluid">
            <div className="row">
                <div className="col-lg-12 footer-nav">
                    <NavLink exact to="/" className="nav-item nav-link link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link link">About</NavLink>
                    <NavLink to="/projects" className="nav-item nav-link link">Projects</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link link">Contact</NavLink>
                    <NavLink to="/login" className="nav-item nav-link link">Admin</NavLink>                       
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;