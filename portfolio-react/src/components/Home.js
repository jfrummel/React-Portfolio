import React from 'react'
import "../scss/Home.scss";
import NavBar from "../components/NavBar";



const Home = () => {
    return ( 
        <div className="container-fluid main">
            <NavBar />
            <div className="row header-main">
                <div className="col-lg-12 text-center align-middle">
                    <img src="./logo-design.png" alt="JR Logo" className="img mb-5"/>
                    <h1 className="title-name">Jeremy Rummel</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Home;