import React from 'react'
import "../scss/Home.scss";
import { Link } from "react-router-dom";



const Home = () => {
    return ( 
        <div className="container-fluid main">
            <div className="row header-main">
                <div className="col-lg-4 text-center">
                    <h1 className="title-name">Jeremy Rummel</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
                <div className="col-lg-4 offset-lg-4">
                    <h2 className="header-text">Thank you for visiting my site!  Please have a look around and drop me a line <Link to="/contact">here</Link>.</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Home;