import React, { Component } from 'react';
import './App.css';
import ToggleButton from './components/UI/ToggleButton/ToggleButton';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToggleButton btnClass="Red"/>
        <ToggleButton btnClass="Blue"/>
        <ToggleButton btnClass="Brown"/>
        <ToggleButton btnClass="Black"/>
      </div>
    );
  }
}

export default App;
