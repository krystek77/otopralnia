import React, { Component } from 'react';
import classes from './Customers.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import axios from '../../axios-pralma';

class Customers extends Component {

    state={
        data:null
    }

    componentDidMount(){
        //console.log("Customers page")
        axios.get("/customers.json")
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
                <main className={classes.Customers}>
                    <div className={classes.Container}>
                        <h1 style={{fontSize:"6rem",textAlign:"center"}}>
                            Klienci {this.props.match.path}
                        </h1>    
                    </div>
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

export default Customers