import React, { Component } from 'react';

import './App.css';

import ObjViewer from './components/ObjViewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {

    return (
      <div className="App">
        <ObjViewer />
      </div>
    );
  }
}

export default App;
