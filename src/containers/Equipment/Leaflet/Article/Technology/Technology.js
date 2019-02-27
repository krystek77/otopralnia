import React, { Component } from 'react';
import classes from './Technology.css';

import H3 from '../../../../../components/H3/H3';
import Aux from '../../../../../hoc/Aux/Aux';

const data = [
    {id:1,name:"Sterownik TC",desc:"Prosty w obsłudze sterownik mikroprocesorowy."},
    {id:2,name:"Nierdzewne oblachowanie",desc:"Brak rdzy"},
    {id:3,name:"Kulowe zawory wodne",desc:"Prosty w obsłudze sterownik mikroprocesorowy."},
]

class Technology extends Component {
    //recived props will be table of objects
    state = { 
        technology:[]
     }
    
    componentDidMount(){
        console.log("Zamontowany Technology")
        this.setState({
            technology:[...data]
        })
    }
    render() {
        console.log("RenderTechnology")

        let content = null

        if(this.state.technology.length){
                
            content = (
                <section className={classes.Technology}>
                    <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">Technologie</H3>
                    <p 
                        className={classes.Description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat ullam omnis temporibus magnam numquam hic enim quaerat sint voluptas possimus accusantium doloremque minus id, tenetur recusandae fuga, modi sequi.
                    </p>
                    <div>
                        <span>Sterownik TC</span>
                        <span>Nierdzewne oblachowanie</span>
                        <span>Kulowe zawory wodne</span>
                    </div>
                </section>
            )
        }
        return (
            <Aux>
                {content}
            </Aux> 
         );
    }
}
 
export default Technology;