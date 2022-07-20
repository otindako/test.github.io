import React, { Component } from "react"; 
import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="width-container font-center">
        <h2>Contact</h2>

        <p className="welcome-text">For contact please send me an E-mail, I will be happy to
        respond.</p>
        <a href="mailto: pablocisnerosrojas@gmail.com" className="email-container">pablocisnerosrojas@gmail.com</a>
      </div>
    );
  }
}
 
export default Contact;