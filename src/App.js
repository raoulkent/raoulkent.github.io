import React, { Component } from 'react';
import './App.css';
import ProjectIcon from './ProjectIcon';
import CardTitle from './CardTitle';
import ProjectCard from './ProjectCard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <ProjectCard projectName="hoolaboola"/>
          <ProjectCard projectName="Sara e bäst"/>
        </div>
      </div>
    );
  }
}

export default App;
