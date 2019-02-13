import React, { Component } from 'react';
import classes from './App.css';
import ToggleButton from './components/UI/ToggleButton/ToggleButton';
import LinkButton from './components/UI/LinkButton/LinkButton';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <ToggleButton btnClass="Red"/>
        <ToggleButton btnClass="Blue"/>
        <ToggleButton btnClass="Brown"/>
        <ToggleButton btnClass="Black"/>
        <LinkButton btnClass="Black">więcej...</LinkButton>
        <LinkButton btnClass="Red">Dowiedz się więcej...</LinkButton>
        <LinkButton btnClass="Blue">Poznaj promocje</LinkButton>
        <LinkButton btnClass="Brown">Nasze technologie</LinkButton>
      </div>
    );
  }
}

export default App;
