import React, { Component } from 'react';
import classes from './Equipment.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import axios from '../../axios-pralma';
import SectionTab from '../../components/SectionTab/SectionTab';

class Equipment extends Component {

    state={
        data:null
    }

    componentDidMount(){
        //console.log("Equipment page")
        axios.get("/equipment.json")
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
            
        const {title,info,details,page} = data

        content = (
            <Aux>
                <Header 
                title={title} 
                info={info} 
                details={details}
                page={page}/>
                <main className={classes.Equipment}>
                    <SectionTab title="Maszyny obsługowe" active/>
                    <SectionTab title="Maszyny samoobsługowe"/>
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