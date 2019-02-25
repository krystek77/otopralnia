import React from 'react';
// import classes from './SectionTabs.css';
import SectionTab from './SectionTab/SectionTab'
import Aux from '../../hoc/Aux/Aux'

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
    const tabs = Object.keys(type).map((tab)=>{
        return [...Array(type[tab])].reduce((a,e)=>a.concat(e))
    }).sort(compare).map((elem)=>{
        if(elem.id===1) { 
            return (
                <SectionTab key={elem.id} title={elem.title} active/>
            )
        }
        return (
            <SectionTab key={elem.id} title={elem.title}/>
        )
    });

    return (
        <Aux>
            {tabs}
        </Aux>
    )
}

export default sectionTabs