import React, { Component } from 'react';
import classes from './Equipment.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import axios from '../../axios-pralma';

import SectionTabs from '../../components/SectionTabs/SectionTabs';
import Leaflet from './Leaflet/Leaflet';

import {Route,Switch} from 'react-router-dom';

class Equipment extends Component {

    state={
        data:null
    }

    componentDidMount(){
        //console.log("Equipment page")
        axios.get("/equipment.json")
        .then(response=>{
            // console.log(response.data)
            this.setState({
                data:response.data
            })
          })
          .catch(error=>console.log(error.message))
    }

    render(){
    let content = null
    const {data} = this.state

    if(data){
            
        const {title,info,details,page,type} = data

        content = (
            <Aux>
                <Header 
                    title={title} 
                    info={info} 
                    details={details}
                    page={page}/>
                <main className={classes.Equipment}>
                <Switch>
                    <Route path={this.props.match.url+"/:kind"} render={(props)=><Leaflet {...props} type={type}/>}/>
                    <Route path={this.props.match.url} render={props=><SectionTabs {...props} type={type}/>}/>
                </Switch>
                </main>
            </Aux>
            )
        }

        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

export default Equipment