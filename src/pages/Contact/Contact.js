import React, { Component } from "react"; 
import './contact.css'

class Contact extends Component {
  render() {
    return (
      <>
        <div className="width-container font-center">
          <h2>Contact</h2>
          <p className="welcome-text">For contact please send me an E-mail, I will be happy to
          respond.</p>
          <a href="mailto: pablocisnerosrojas@gmail.com" className="email-container">pablocisnerosrojas@gmail.com</a>
        </div>
        
        <div className="social-links width-container">
          <a href="https://github.com/Pablo6152" className="g-logo">
            <img src={require("../../img/glogo.png")} alt="Github logo" className="social-media-icon"/>
            </a>
            <a href="https://t.me/pablo6152" className="g-logo">
            <img src={require("../../img/tLogo.png")} alt="Telegram logo" className="social-media-icon"/>
            </a>
        </div>
      </>
    );
  }
}
 
export default Contact;