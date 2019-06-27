import React from 'react';
// import classes from './SectionTabs.css';
import SectionTab from './SectionTab/SectionTab'
import Aux from '../../hoc/Aux/Aux';
import CardsEquipment from '../CardsEquipment/CardsEquipment';
import {compare} from '../../vendor/functions';


const sectionTabs = props => {

    const type = {...props.type}
    const match = {...props.match}
    // console.log(type)
    // console.log(match)

    const tabs = Object.keys(type).map((tab)=>{
        return [...Array(type[tab])].reduce((a,e)=>a.concat(e))
    }).sort(compare).map((elem)=>{// console.log(elem)

        const {id,title,descTab,cards} = elem //{cards:{a:{},b:{}....},id:1,title:"Maszyny obsługowe",descTab:""}

        if(id===1) {    
            console.log("SectionTabs")
            console.log(cards)
            return (
                <SectionTab
                    key={id} 
                    active 
                    titleTab={title}
                    descriptionTab={descTab}
                    disabled = {cards ? "false":"true"}>   
                    { cards && <CardsEquipment 
                        cards={cards} 
                        key={id}
                        match={match}
                        />}
                
                </SectionTab>
            )
        }
        console.log("SectionTabs")
        console.log(cards)
        return (
            <SectionTab 
                key={id} 
                titleTab={title} 
                descriptionTab={descTab}
                disabled = {typeof cards!=="undefined" && cards!==null ? "false":"true"}> 
                
                { cards && <CardsEquipment 
                cards={cards} 
                key={id}
                match={match}/>}
            </SectionTab>
        )
    });

    return (
        <Aux>
            {tabs}
        </Aux>
    )
}

export default sectionTabs