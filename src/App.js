import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Welcome from './Components/Welcome';
import Word from './Components/Word';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Word path="/:word"/>
        <Word path="/:word/:text/:background"/>
      </Router>
    </div>
  );
}

export default App;
