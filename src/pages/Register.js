import React from 'react';
import {
  Link
}from 'react-router-dom';
function Register(){
    return(
      <div>
        <div className="navbar">
            <div className="nav-menu-left">
                <img src="./app_logo.png" alt="not available"></img>
                <h5>Neighbours</h5>
            </div>
            <div className="nav-menu-right"> 
                <Link className="nav-menu-right-link" to="/"><b>Home</b></Link>
                <Link className="nav-menu-right-link" to="/contact"><b>Contact</b></Link>
                <Link className="nav-menu-right-link" to="/login"><b>Login</b></Link>
            </div>
        </div>
      <h2 className="form-header">Create Account</h2>        
        <div className="login-item">
          <div className="form-box">
            <form>
                  <div className="form-login">
                      <label> User Name</label><br/>
                      <input id="username" type="text" className="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                      <label> Email</label><br/>
                      <input id="email" type="email" className="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                      <label> Password</label><br/>
                      <input id="password" type="password" className="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                      <label> Confirm Password</label><br/>
                      <input id="cpassword" type="password" className="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                      <label> Postal Code</label><br/>
                      <input id="postalcode" type="text" className="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                <input type="submit" value="Register"></input> />
            </div>
            </form>
            <div className="form-login">
                  <p>Already have an account! <Link to="/Login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Register;