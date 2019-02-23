import React, {Component} from 'react';
import classes from './Test.css';
import Aux from '../../hoc/Aux/Aux'
import Header from '../../components/Header/Header';
import axios from '../../axios-test';

class Test extends Component {

    state={
        data:null
    }

    componentDidMount(){
        console.log("Test")
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
        console.log(data)
        if(data){
            content = (
                <Aux>
                <Header/>
                <main className={classes.Test}>
                    <h2>Test</h2>
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
export default Test