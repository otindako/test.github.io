import React, { Component } from "react"; 
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="width-container font-center">
        <img src={require("../../img/me.webp")} alt=""  className="author-img"/>
        <h2>Pablo Cisneros</h2>
        <p className="small-text">Web developer.</p>

        <a href="mailto: pablocisnerosrojas@gmail.com" className="email-container">Send me an E-mail.</a>

        <p className="regular-p">This app is powered by ReactJS and <span className="accent-text">way too much</span> coffe.</p>
      </div>
    );
  }
}
 
export default About;