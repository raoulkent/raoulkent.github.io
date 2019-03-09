import React, { Component } from 'react';
import './App.css';
import ProjectIcon from './ProjectIcon/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProjectIcon projectName="raoul kenjir"/>
          <ProjectIcon projectName="sara kenjir"/>
        </header>
      </div>
    );
  }
}

export default App;
