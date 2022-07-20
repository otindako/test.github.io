import React, { Component } from "react";
import './Home.css'


class Home extends Component {
    render() {
      return (
        <article className='items-container width-container'>
        <div className="item-box">Home</div>
        <div className="item-box">Projects</div>
        <div className="item-box">Contact</div>
        <div className="item-box">About</div>
      </article>
      );
    }
}
   

export default Home;