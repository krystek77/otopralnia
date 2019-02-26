import React, { Component } from 'react';
import classes from './Technology.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import axios from '../../axios-pralma';

import SectionTabs from '../../components/SectionTabs/SectionTabs';
class Technology extends Component {
    
    state={
        data:null
    }

    componentDidMount(){
        //console.log("Technology page")
        axios.get("/technology.json")
        .then(response=>{
            //console.log(response.data)
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
                <main className={classes.Technology}>
                    <SectionTabs type={type}/>
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

export default Technology