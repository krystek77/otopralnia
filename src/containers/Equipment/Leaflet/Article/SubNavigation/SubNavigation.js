import React from 'react';
import classes from './SubNavigation.css';
import H4 from '../../../../../components/H4/H4';
import {compare} from '../../../../../vendor/functions';
import {NavLink} from 'react-router-dom';



const subNavigation = props => {
    

    const lastIndex = props.subNavigation.length-1
    let itemClass = [classes.NavigationItem]
    
    const navigationItems = props.subNavigation.sort(compare).map((item,index)=>{

        if(lastIndex===index){
            itemClass = itemClass.concat(classes["Last"]).join(' ')
        }
        console.log("Subnavigation")
        console.log(props.match)
        return (<li 
                    key={item.id} 
                    className={itemClass}>
                    <NavLink 
                        className={classes.NavigationLink} 
                        to={{
                            pathname:item.name
                        }}
                        >
                        {item.name}
                    </NavLink>
                </li>)
    })

    return (
        <aside className={classes.SubNavigation}>
            <H4 hClass="Black" hMb="Mmedium">Dostępne modele</H4>
            <ul className={classes.Navigation}>
                {navigationItems}
            </ul>
        </aside>
    )
}

export default subNavigation