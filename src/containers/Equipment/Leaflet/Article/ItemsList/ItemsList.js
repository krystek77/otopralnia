import React from 'react';
import classes from './ItemsList.css';
import  {compare} from '../../../../../vendor/functions'

const itemsList = props => {
    // console.log(props)
    let items = null;
    if(typeof props.items !=="undefined" && props.items!==null) {

        items = Object.keys(props.items).sort(compare).map((elem)=>{
            return [...Array(props.items[elem])].reduce((a,e)=>a.concat(e))
        }).map((name)=><li key={name}>{name}</li>)
        // console.log(items)
    }

    return (
        <ul className={classes.ItemsList}>
            {items}
        </ul>
    )
}

export default itemsList