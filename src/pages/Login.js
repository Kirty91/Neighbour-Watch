import React from 'react';
import {
  Link,useHistory
}from 'react-router-dom';

function Login(props){
    let history = useHistory();
    let [password, setPassword] = React.useState('');

    function goToHome(event) {
      event.preventDefault();
      history.push('/');
    }

    function handleUsernameChange(event) {
        props.setUsername(event.currentTarget.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.currentTarget.value);
    }
    return(
      <div>
     <img src="../app_logo.png"  alt="not available"></img>
      <h2 className="form-header tpurple">Neighbours</h2>        
        <div className="login-item">
          <div className="form-box">
            <form onSubmit={goToHome}>
              <div className="form-login">
                  <label> User Name</label><br/>
                  <input id="username" type="text" className="form-input" value={props.username} onChange={handleUsernameChange} required/><br/>
              </div>              
              <div className="form-login">
                  <label> Password</label><br/>
                  <input id="password" type="password" className="form-input" value={password} onChange={handlePasswordChange} required/><br/>
              </div>              
              <div className="form-login">
                  <input type="submit" value="Login" onClick={goToHome}/>
              </div>
            </form>
            <div className="form-login">
                <p><Link to="/Register">Create Account</Link></p>
            </div>
        </div>
       </div>
      </div>        
    );
}
export default Login;