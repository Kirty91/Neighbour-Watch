import React from 'react';
import {
    Link
}from 'react-router-dom';
import PageContent from './pageContent.js'

function Home(props){
    return(
        <div>
        <div className="navbar">
            <div className="nav-menu-left">
                <img src="./app_logo.png" alt="not available"></img>
                <h5>Neighbours</h5>
            </div>
            <div className="nav-menu-right"> 
                <p className="nav-menu-right-link"><b>Welcome, {props.username}</b></p>
                <Link className="nav-menu-right-link" to="/"><b>Home</b></Link>
                <Link className="nav-menu-right-link" to="/contact"><b>Contact</b></Link>
                <Link className="nav-menu-right-link" to="/login"><b>Login</b></Link>
            </div>
        </div>
        <PageContent/>
        </div>
    )
}
export default Home;

