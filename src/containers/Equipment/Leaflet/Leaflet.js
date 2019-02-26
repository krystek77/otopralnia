import React, { Component } from 'react'
import classes from './Leaflet.css';
import Aux from '../../../hoc/Aux/Aux'

class Leaflet extends Component {

    state={
        familyDevices:null,
    }

    componentDidUpdate(){
        console.log("Zaktualizowany")
        
    }
    componentDidMount(){
        console.log("Zamontowany")
        const types = this.props.type
        const typesInArray = Object.keys(types).map((elem)=>{
            return [...Array(types[elem])].reduce((a,e)=>{
                return a.concat(e)
            })
        });
        
        const choosenFamily = typesInArray.filter((elem)=>typeof elem.cards !== "undefined" && elem.cards !== null).map((cards)=> cards.cards).map((elem)=>Object.keys(elem).map((key)=>elem[key])).reduce((a,e)=>a.concat(e))
        .filter((elem)=>elem.link === this.props.match.params.kind)

        if(choosenFamily.length > 0 && (typeof choosenFamily[0].family !== "undefined" && choosenFamily[0].family !== null)) {
            const [family] = choosenFamily
            this.setState({
                familyDevices:family["family"]
            })
        }
    }

    render(){

        let content = null;

        if(this.state.familyDevices){
            content = (

                <div className={classes.Leaflet}>
                    <h1>podstrona hahahah</h1>
                </div>

            )
        }

        console.log("render")
        console.log(this.state.familyDevices)
        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

export default Leaflet