import React, { Component } from "react"; 
import './projects.css'
import ProjectList from "./list";

class Projects extends Component {
  render() {
    return (
      <div className="width-container">
        <h2 className="title">Projects</h2>
      <ProjectList/>
        
      </div>
    );
  }
}
 
export default Projects;