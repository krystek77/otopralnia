import React from 'react';
// import classes from './SectionTabs.css';
import SectionTab from './SectionTab/SectionTab'
import Aux from '../../hoc/Aux/Aux';
import CardsEquipment from '../CardsEquipment/CardsEquipment';

const compare =(objectA,objectB)=>{
    if(objectA.id < objectB.id){
        return -1
    }
    if(objectA.id > objectB.id){
        return 1
    }
    return 0
}

const sectionTabs = props => {

    const type = props.type
    // console.log(type)

    const tabs = Object.keys(type).map((tab)=>{
        return [...Array(type[tab])].reduce((a,e)=>a.concat(e))
    }).sort(compare).map((elem)=>{// console.log(elem)

        const {id,title,descTab,cards} = elem //{cards:{a:{},b:{}....},id:1,title:"Maszyny obsługowe",descTab:""}

        if(id===1) {    
            return (
                <SectionTab 
                    key={id} 
                    active 
                    titleTab={title}
                    descriptionTab={descTab}>   
                    <CardsEquipment cards={cards} key={id}/>
                </SectionTab>
            )
        }
        
        return (
            <SectionTab 
                key={id} 
                titleTab={title} 
                descriptionTab={descTab}>
                <CardsEquipment cards={cards} key={id}/>
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