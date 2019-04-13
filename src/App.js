import React, { Component } from 'react';
import './App.css';

import AddThing from './components/Addthing';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddThing />
      </div>
    );
  }
}

export default App;