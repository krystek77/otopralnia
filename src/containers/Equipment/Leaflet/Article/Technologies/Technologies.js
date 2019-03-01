import React, { Component } from 'react';
import classes from './Technologies.css';

import H3 from '../../../../../components/H3/H3';
import Aux from '../../../../../hoc/Aux/Aux';

class Technology extends Component {
    //recived props will be table of objects
    constructor(props){
        super()
        this.state = { 
            selectedTechnology:null,
            active:[]
         }
    }
    
    componentDidMount(){
        // console.log(this.props.technologies) 
        const tech = [...this.props.technologies]
        const amountTechnologies = tech.length
        const active = [...Array(amountTechnologies)].map((elem)=>false)

        const index = Math.floor(Math.random()*amountTechnologies)
        // Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        const selectedRandomTechnlogy = tech.splice(index,1)
        const [selected] = selectedRandomTechnlogy
        active[index]=true

        this.setState({
            selectedTechnology:selected,
            active:active
        })
    }

    technologyNameOverHandler=(technologyId)=>{
        const tech = [...this.props.technologies];
        const index = tech.findIndex((technology)=>technology.id===technologyId)
        const selectedTechnology = tech.splice(index,1)
        const [selected ] = selectedTechnology
        const active = [...this.state.active].map((elem,i)=>{
            if(index===i){return true}
            return false
        })

        this.setState({
            selectedTechnology:selected,
            active:active
        })
        
    }

    render() {
        let content = null
        const tech = this.props.technologies

        if(tech.length){
            
            let desc = ""
    
            if(this.state.selectedTechnology){
                desc = (
                    <p className={classes.TechnologyDescription}>
                        {this.state.selectedTechnology.desc}
                    </p>
                )
            }
            
            const technologyNames = tech.map((technology,index)=>{

                if(this.state.active[index]===true){
                    return (
                        <span 
                            key={technology.id} 
                            className={[classes.TechnologyName,classes.Active].join(' ')}
                            onMouseOver={()=>this.technologyNameOverHandler(technology.id)}
                            >
                            {technology.name}
                        </span>
                    )   
                }

                    return (
                        <span 
                            key={technology.id} 
                            className={classes.TechnologyName}
                            onMouseOver={()=>this.technologyNameOverHandler(technology.id)}
                            >
                            {technology.name}
                        </span>
                    )
                }
            )

            content = (
                <section className={classes.Technology}>
                    <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">Technologie</H3>
                    {desc}
                    <div className={classes.TechnologyNamesWrapper}>
                        {technologyNames}
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