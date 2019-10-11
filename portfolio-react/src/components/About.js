import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/About.scss';

const About = () => {
    return ( 
        <div className="container-fluid about-section">
            <div className="row">
                <div className="col-lg-12 text-center mt-5 mb-2">
                    <img className="img rounded portrait" src="/portrait.jpg" alt="Portrait"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center mt-4 pt-4">
                    <a href="https://www.grandview.edu/" target="_blank" rel="noopener noreferrer"><img src="/gvu-logo.png" alt="GVU" className="img gvu-logo"/></a>
                </div>
                <div className="col-lg-6 text-center pb-4">
                    <a href="https://www.devslopes.com/" target="_blank" rel="noopener noreferrer"><img src="/dev-logo.jpg" alt="Devslopes" className="img dev-logo"/></a>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <p className="about-text">
                        Based out of central Iowa, I am a graduate of Grand View University as well as the
                        <a href="https://www.devslopes.com/courses/beginner-web" target="_blank" rel="noopener noreferrer"> DEVSLOPES</a> Full Stack Web Development Course.
                        If you are looking for a new addition to your team that can help develop fast, responsive and dynamic web applications,
                        please contact me <Link to="/contact">here</Link>.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default About;