import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';


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

    render(){
        // console.log("layout render")
        // console.log(this.state)
        // console.log("____________________")
        
        return (
            <Aux>
                <Toolbar/>
                <Switch>
                    <Route path="/klienci-pralni-przemyslowych" render={(props)=><Customers {...props}/>}/>
                    <Route path="/wyposazenie-pralni-przemyslowych" render={(props)=><Equipment {...props}/>}/>
                    <Route path="/technologie-nowoczesnej-pralni-przemyslowej" render={(props)=><Technology {...props}/>}/>
                    <Route path="/recykling-mediow-w-pralni" render={(props)=><Recycling {...props}/>}/>
                    <Route path="/wiadomosci-o-pralniach-przemyslowych" render={(props)=><News {...props}/>}/>
                    <Route path="/o-pralma" render={(props)=><AboutUs {...props}/>}/>
                    <Route path="/kontakt-do-producenta-pralek-przemyslowych" render={(props)=><Contact {...props}/>}/>
                    <Route path="/" render={(props)=><Home {...props}/>}/>
                </Switch>     
                <Footer/>
            </Aux>
        )
    }
}

export default Layout