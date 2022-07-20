import React, { Component } from "react";
import './Home.css'

class Home extends Component {
    render() {
      return (
        <div className="width-container title">
          <h2>Greetings 😄</h2>
          <p className="welcome-text">My name is Pablo Cisneros and I am a web developer</p>
          <p className="welcome-text">I consider my knowledge in React, JavaScript, and CSS/HTML to be
          pretty solid, as for now I just have been studying by myself but now I am able to amazing
          things with all this technology!</p>
          <p className="welcome-text">If you managed to get to this point I kindly invite you to check my work
          located on the projects page, thank you for reading!.</p>
          <p className="welcome-text emoji">😎</p>
      </div>
      );
    }
}
   

export default Home;