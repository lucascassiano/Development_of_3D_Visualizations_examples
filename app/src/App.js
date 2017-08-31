import React, { Component } from 'react';

import './App.css';
import BarraLateral from './components/BarraLateral';
import database from './data/database.json';

class App extends Component {
  render() {
    console.log("database",database);
    return (
      <div className="App">
        <BarraLateral title="3D App" database={database}/>
      </div>
    );
  }
}

export default App;
