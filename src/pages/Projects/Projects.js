import React, { Component } from "react"; 
import './projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="width-container">
        <h2 className="font-center title">Projects</h2>
        <section className="project-list">
        <div className='project-box'>
            <img src={require('../../img/tip.webp')} alt="" className='img' />
            <p className='project-title'>Tip calculator</p>
            <a className='project-link' href="https://tip-generator.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/carousel.webp')} alt="" className='img' />
            <p className='project-title'>Picture's carousel</p>
            <a className='project-link' href="https://mycarousel.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/moneyCalc.webp')} alt="" className='img' />
            <p className='project-title'>Salary calculator</p>
            <a className='project-link' href="https://mycalculator.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/ideaMaker.webp')} alt="" className='img' />
            <p className='project-title'>Idea maker</p>
            <a className='project-link' href="https://idea-maker.pages.dev/">Click here!</a>
        </div>
    </section>
        
      </div>
    );
  }
}
 
export default Projects;