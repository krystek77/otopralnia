import React from 'react';
import CardEquipment from './CardEquipment/CardEquipment';
import Aux from '../../hoc/Aux/Aux';
import {compare} from '../../vendor/functions';


const cardsEquipment = props => {

        const images = require.context('../../../public/images/cards',true)
        
        const cards = {...props.cards}
        const match = {...props.match}
        //{cards:{a:{},b:{}....},id:1,title:"Maszyny obsługowe",descTab:""}

        let cardsEquipment = null

        if(typeof cards !== "undefined" && cards!==null) {

            let isImage = false
            let codeImage = ""
            
            cardsEquipment = Object.keys(cards).map((type)=>{
                return ([...Array(cards[type])]).reduce((a,e)=>a.concat(e))
                }).sort(compare).map((elem)=>{
                    console.log(elem)
                    if( typeof elem.image!=="undefined" && elem.image!==""){
                        isImage=true
                        codeImage = elem.image
                    }
                return <CardEquipment 
                        key={elem.id}
                        elem ={elem}
                        match={match}
                        imageSrc = {isImage ? images(`./${codeImage}.png`):isImage.toString()}
                        />
                })
            
        }
        console.log(cards)
    return (
        <Aux>
            {cardsEquipment}    
        </Aux>
    )
}

export default cardsEquipment