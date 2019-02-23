import React, { Component } from 'react';
import classes from './Home.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import axios from '../../axios-pralma';


class Home extends Component {

    state={
        data:null
    }

    componentDidMount(){
        //console.log("THome page")
        axios.get("/home.json")
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

            const {title,info,details,page,actionBtn} = data

            content = (
                <Aux>
                    <Header 
                        title={title} 
                        info={info} 
                        details={details}
                        actionBtn={actionBtn}
                        page={page}
                        />
                    <main className={classes.Home}>
                        <div className={classes.Container}>
                            <h1 style={{fontSize:"6rem",textAlign:"center"}}>
                            Strona startowa {this.props.match.path}
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

export default Home