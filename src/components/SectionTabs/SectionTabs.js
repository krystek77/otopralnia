import React from 'react';
// import classes from './SectionTabs.css';
import SectionTab from './SectionTab/SectionTab'
import Aux from '../../hoc/Aux/Aux'
import Card from '../../components/Cards/Card/Card';

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
    console.log(type)

    const tabs = Object.keys(type).map((tab)=>{
        return [...Array(type[tab])].reduce((a,e)=>a.concat(e))
    }).sort(compare).map((elem)=>{

        const {id,title,cards} = elem

        let card = null
        let description = null

        if(typeof cards !== "undefined") {
            if(typeof cards.card !=="undefined" && typeof cards.description !== "undefined"){
                card = {...cards.card}
                description = cards.description
        
                card = Object.keys(card).map((type)=>{
                return ([...Array(card[type])]).reduce((a,e)=>a.concat(e))
                }).sort(compare).map((elem)=>{
                return <Card 
                        key={elem.id}
                        elem ={elem}
                        />
                })
            }
        }

        if(id===1) { 
            return (
                <SectionTab 
                    key={id} 
                    active 
                    title={title}
                    description={description}>   
                    {card}
                </SectionTab>
            )
        }
        return (
            <SectionTab key={id} title={title} description={description}>
                {card}
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