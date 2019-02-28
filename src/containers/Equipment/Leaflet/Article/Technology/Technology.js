import React, { Component } from 'react';
import classes from './Technology.css';

import H3 from '../../../../../components/H3/H3';
import Aux from '../../../../../hoc/Aux/Aux';

//Recived by props
const technologies = [
    {id:1,name:"Sterownik TC",desc:"Sterownik mikroprocesorowy TC to prosta obsługa i duża elastyczność procesu prania. Wyposażony w pełny system zabezpieczeń dla urządzeń ze sterowaniem półautomatycznym. Umożliwia programowanie czasu obrotów rewersji i postoju, płynną regulację czasu i temperatury prania. Pełny system zabezpieczeń dla pralnic ze sterowaniem manualnym (półautomatycznym). "},

    {id:2,name:"Nierdzewne oblachowanie",desc:"Brak rdzy i to po wielu wydajnych latach użytkowania. To nie tylko gwarancja ładnego wyglądu urządzenia, to też obniżenie kosztów eksploatacji dzięki braku konieczności wymiany skorodowanych elementów na nowe, tak jak w przypadku oblachowania ocynkowanego, lakierowanego proszkowo. Wersja ocynkowana, tańsza przy zakupie okazywała się o wiele droższa w przyszłości."},

    {id:3,name:"Kulowe zawory",desc:"Proste jest piękne i genialne. Kulowe zarowy wodne, zarówno zasilające i spustowy gwarantują Ci niezawodność działania oraz pełną kontrolę nad zużyciem wody w procesie każdego cyklu prania. To bardzo elastyczne rozwiązania umożliwia maksymalną optymalizację kosztów prania"},

    {id:4,name:"Nierdzewny bęben",desc:"Obowiązkowe wykonanie dla każdego rodzaju przemysłowego urządzenia pralniczego. Brak niepożądanych reakcji chemicznych z bębnem oraz śladów rdzy na praniu lub innych powłok, jak w przypadku bębnów ocynkowanych. To już nie tylko gwarancja zachowania wysokiej jakości prania ale i braku negatywnych skutków na zdrowie każdego z nas."}
]

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
        const tech = [...technologies]
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
        const tech = [...technologies];
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
        console.log(this.state.active)
        let content = null
        
        if(technologies.length){
            
            let desc = ""
    
            if(this.state.selectedTechnology){
                desc = (
                    <p className={classes.TechnologyDescription}>
                        {this.state.selectedTechnology.desc}
                    </p>
                )
            }
            
            const technologyNames = technologies.map((technology,index)=>{

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