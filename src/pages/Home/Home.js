import React, { Component } from "react";
import './Home.css'

class Home extends Component {
    render() {
      return (
        <div className="width-container font-center">
          <h2>Greetings 😄</h2>
          <p className="regular-p">My name is Pablo Cisneros and I am a web developer,</p>
          <p className="regular-p">I consider my knowledge in React, JavaScript, and CSS/HTML to be
          pretty solid, as for now I just have been studying by myself but now I am able to amazing
          things with all this technology!</p>
          <p className="regular-p">If you managed to get to this point I kindly invite you to check my work
          located on the projects page, thank you for reading!.</p>
          <p className="regular-p emoji">😎</p>
      </div>
      );
    }
}
   

export default Home;