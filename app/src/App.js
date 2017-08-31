import React, { Component } from 'react';

import './App.css';
import BarraLateral from './components/BarraLateral';
import database from './data/database.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currExam : null
    }

    this.HandleExam = this.HandleExam.bind(this);
  }

  HandleExam(exam) {
   
    this.setState({
      currExam: exam
    });

    console.log("Exame foi trocado para ", this.state.currExam);
  }

  render() {
    console.log("database", database);
    return (
      <div className="App">
        <BarraLateral title="3D App" database={database} clickCallback={this.HandleExam} />
      </div>
    );
  }
}

export default App;
