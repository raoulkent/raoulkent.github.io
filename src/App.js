import React, { Component } from 'react';
import './App.css';
import ProjectIcon from './ProjectIcon/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <ProjectIcon projectName="raoul kenjir"/>
          <ProjectIcon projectName="sara kenjir"/>
          <ProjectIcon projectName="John Smith"/>
          <ProjectIcon projectName="Smith Johnson"/>
          <ProjectIcon projectName="Mr Tooty"/>
        </div>
      </div>
    );
  }
}

export default App;
