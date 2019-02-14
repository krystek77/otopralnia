import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';


const Home          = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Strona startowa {props.match.path}</h1>
const Customers     = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Klienci Page {props.match.path}</h1>
const Equipment     = (props)=>{
  console.log(props)
  return (
    <h1 style={{fontSize:"6rem",textAlign:"center"}}>Wyposażenie Page {props.match.path}</h1>
    )
}
const Technology    = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Technologie Page {props.match.path}</h1>
const Recycling     = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Recykling mediów Page {props.match.path}</h1>
const News          = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Wiadomości Page {props.match.path}</h1>
const AboutUs       = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>O nas Page {props.match.path}</h1>
const Contact       = (props)=><h1 style={{fontSize:"6rem",textAlign:"center"}}>Kontakt Page {props.match.path}</h1>

class App extends Component {

  render() {
    return (
        <Aux>
          <Router>
            <Layout>
                <Route path="/" exact component={Home}/>
                <Route path="/klienci-pralni-przemyslowych" component={Customers}/>
                <Route path="/wyposazenie-pralni-przemyslowych" component={Equipment}/>
                <Route path="/technologie-nowoczesnej-pralni-przemyslowej" component={Technology}/>
                <Route path="/recykling-mediow-w-pralni" component={Recycling}/>
                <Route path="/wiadomosci-o-pralniach-przemyslowych" component={News}/>
                <Route path="/o-pralma" component={AboutUs}/>
                <Route path="/kontakt-do-producenta-pralek-przemyslowych" component={Contact}/>
            </Layout>
          </Router>
        </Aux>
    );
  }
}

export default App;
