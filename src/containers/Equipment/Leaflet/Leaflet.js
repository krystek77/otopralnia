import React, { Component } from 'react'
import classes from './Leaflet.css';
import {Route} from 'react-router-dom';
import Article from './Article/Article';

import Aux from '../../../hoc/Aux/Aux'

class Leaflet extends Component {

    state={
        family:[],
        technologies:[]
    }

    componentDidUpdate(){
        // console.log("Zaktualizowany")
        
    }
    componentDidMount(){
        
        const types = this.props.type
       
        const typesInArray = Object.keys(types).map((elem)=>{
            return [...Array(types[elem])].reduce((a,e)=>{
                return a.concat(e)
            })
        });
        
        const card = typesInArray.filter((elem)=>typeof elem.cards !== "undefined" && elem.cards !== null).map((cards)=> cards.cards).map((elem)=>Object.keys(elem).map((key)=>elem[key])).reduce((a,e)=>a.concat(e))
        .filter((elem)=>elem.link === this.props.match.params.kind)

        if(card.length > 0){
            const [obj] = card;

            let family = obj.family
            
            if(typeof family !== "undefined" && family !== null){
                
                family = Object.keys(family).map((elem)=>{
                    return [...Array(family[elem])].reduce((a,e)=>a.concat(e))
                    
                });
                console.log(family)
            }
            let technologies = obj.technologies

            if(typeof technologies !== "undefined" && technologies !== null){

                technologies = Object.keys(technologies).map((elem)=>{
                    return [...Array(technologies[elem])].reduce((a,e)=>a.concat(e))
                    
                });
                console.log(technologies)
            }
            
            this.setState({
                family,
                technologies
            })
        }
    }

    render(){
        let content = null;
        
        if(this.state.family.length > 0 && this.state.technologies.length > 0){
            content = (

                <div className={classes.Leaflet}>
                    <Route 
                        path={this.props.match.url} 
                        render={props=><Article {...props} family={this.state.family} technologies={this.state.technologies}/>}/>
                </div>
            )
        }

        console.log("Leaflet")
        console.log(this.state.family)
        console.log(this.state.technologies)
        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

export default Leaflet