import React, { Component } from 'react';

import './App.css';
import BarraLateral from './components/BarraLateral';
import database from './data/database.json';

class App extends Component {

  HandleExam (exam) {
    console.log("Exame foi trocado para ",exam);
  }

  render() {
    console.log("database",database);
    return (
      <div className="App">
        <BarraLateral title="3D App" database={database} clickCallback = {this.HandleExam}/>
      </div>
    );
  }
}

export default App;
