import React from 'react';
import {
  Link
}from 'react-router-dom';

function Contact(){
  let [name, setName] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [message, setMessege] = React.useState('');
  let [sendMessage, setSendMessage] = React.useState('');

  function handleNameChange(event){
    setName(event.currentTarget.value);
  }
  function handleEmailChange(event){
    setEmail(event.currentTarget.value);
  }
 function handleMessageChange(event){
    setMessege(event.currentTarget.value);
  }
  function submitMessage(event){
    event.preventDefault();
    setSendMessage("Message is successfully sent");
    setMessege('');
  }
    return(
     <div>
       <div className="navbar">
            <div className="nav-menu-left">
                <img src="./app_logo.png" alt="not available"></img>
                <h5>Neighbours</h5>
            </div>
            <div className="nav-menu-right"> 
                <Link className="nav-menu-right-link" to="/"><b>Home</b></Link>
                <Link className="nav-menu-right-link" to="/login"><b>Login</b></Link>
            </div>
        </div>
      <h2 className="form-header">Contact us</h2>    
      <h4 className="form-sub-header">Got a question? We'd love to hear from you. <br/>Send us a message and we'll respond as soon as possible.</h4>    
        <div className="login-item">
          <div className="form-box">
            <form onSubmit={submitMessage}>
                  <div className="form-login">
                      <label> Name</label><br/>
                      <input id="username" type="text" className="form-input" value={name} onChange={handleNameChange} required/><br/>
                  </div>
                  <div className="form-login">
                      <label> Email</label><br/>
                      <input id="email" type="email" className="form-input" value={email} onChange={handleEmailChange} required/><br/>
                  </div>
      
                  <div className="form-login">
                      <label> Message</label><br/>
                      <textarea id="message" type="textarea" className="form-input" required value={message} onChange={handleMessageChange}/><br/>
                  </div>
                  <div className="form-login">
                <input type="submit" value="Send Message" onClick={submitMessage} />
            </div>
            </form>
            <p className="Cgreen text-white text-center">{sendMessage}</p>
          </div>
        </div>
      </div>
    )
}
export default Contact;