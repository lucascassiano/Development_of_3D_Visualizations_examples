import React, { Component } from 'react';

import './App.css';
import BarraLateral from './components/BarraLateral';
import database from './data/database.json';
import Sidebar from 'react-sidebar';
import {Nav, NavItem, navInstance} from 'react-bootstrap';
import ObjectViewer from './components/ObjectViewer';
import Simple from './components/Simple';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currExam: null,
      sidebarOpen: false
    }

    this.HandleExam = this.HandleExam.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  HandleExam(exam) {

    this.setState({
      currExam: exam
    });

    console.log("Exame foi trocado para ", this.state.currExam);
  }

   handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }
  

  

  

  render() {
    console.log("database", database);
    var sidebarContent = <b>Sidebar content</b>;
    const navInstance = (
      <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );

    return (
      <div className="App">
      <Simple width={800} height={600}/>
        
      </div>
    );
  }
}

export default App;
