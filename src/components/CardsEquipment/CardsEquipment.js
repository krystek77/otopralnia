import React from 'react';
import CardEquipment from './CardEquipment/CardEquipment';
import Aux from '../../hoc/Aux/Aux';

const compare =(objectA,objectB)=>{
    if(objectA.id < objectB.id){
        return -1
    }
    if(objectA.id > objectB.id){
        return 1
    }
    return 0
}

const cardsEquipment = props => {

        const cards = {...props.cards}
        const match = {...props.match}
        //{cards:{a:{},b:{}....},id:1,title:"Maszyny obsługowe",descTab:""}

        let cardsEquipment = null

        if(typeof cards !== "undefined" && cards!==null) {
            
            cardsEquipment = Object.keys(cards).map((type)=>{
                return ([...Array(cards[type])]).reduce((a,e)=>a.concat(e))
                }).sort(compare).map((elem)=>{
                return <CardEquipment 
                        key={elem.id}
                        elem ={elem}
                        match={match}
                        />
                })
            
        }
    return (
        <Aux>
            {cardsEquipment}    
        </Aux>
    )
}

export default cardsEquipment