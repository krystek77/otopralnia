import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from '../../axios-pralma';


import Aux from '../Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';
import Home from '../../containers/Home/Home';
import Customers from '../../containers/Customers/Customers';
import Equipment from '../../containers/Equipment/Equipment';
import Technology from '../../containers/Technology/Technology';
import Recycling from '../../containers/Recycling/Recycling';
import News from '../../containers/News/News';
import AboutUs from '../../containers/AboutUs/AboutUs';
import Contact from '../../containers/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    state = {
        data:null
      }
    
      componentDidMount(){
         axios.get('pralma/data.json')
        .then(response=>{
        //   console.log(response.data)
          this.setState({
            data:response.data
          })
        })
        .catch(error=>console.log(error.message))
      }

    render(){
        console.log("layout render")
        console.log(this.state)
        console.log("____________________")
        
        return (
            <Aux>
                <Toolbar/>
                {this.state.data && <Aux>
                  <Route path="/" exact render={(props)=><Home {...props} data={this.state.data}/>}/>
                  <Route path="/klienci-pralni-przemyslowych" render={(props)=><Customers {...props} data={this.state.data}/>}/>
                  <Route path="/wyposazenie-pralni-przemyslowych" render={(props)=><Equipment {...props} data={this.state.data}/>}/>
                  <Route path="/technologie-nowoczesnej-pralni-przemyslowej" render={(props)=><Technology {...props} data={this.state.data}/>}/>
                  <Route path="/recykling-mediow-w-pralni" render={(props)=><Recycling {...props} data={this.state.data}/>}/>
                  <Route path="/wiadomosci-o-pralniach-przemyslowych" render={(props)=><News {...props} data={this.state.data}/>}/>
                  <Route path="/o-pralma" render={(props)=><AboutUs {...props} data={this.state.data}/>}/>
                  <Route path="/kontakt-do-producenta-pralek-przemyslowych" render={(props)=><Contact {...props} data={this.state.data}/>}/>
                  </Aux>}
                <Footer/>
            </Aux>
        )
    }
}

export default Layout