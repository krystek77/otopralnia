import React, { Component } from 'react';
import classes from './SubNavigation.css';
import H4 from '../../../../../components/H4/H4';
import {compare} from '../../../../../vendor/functions';
import {Link} from 'react-router-dom';



class SubNavigation extends Component {
    
render(){
    const lastIndex = this.props.subNavigation.length-1
    let itemClass = [classes.NavigationItem]
    let linkClass = [classes.NavigationLink]
    
    const navigationItems = this.props.subNavigation.sort(compare).map((item,index)=>{

        if(lastIndex===index){
            itemClass = itemClass.concat(classes["Last"]).join(' ')
        }
        if(this.props.match.params.name === item.name){
            // console.log(this.props.match.params.name)
            // console.log(item.name)
            return (<li 
                key={item.id} 
                className={itemClass}>
                <Link 
                    className={linkClass.concat(classes['Active']).join(' ')} 
                    to={{
                    pathname:item.name
                    }}
                    >
                    {item.name}
                </Link>
                </li>)
        }
        return (<li 
            key={item.id} 
            className={itemClass}>
            <Link 
                className={linkClass} 
                to={{
                    pathname:item.name
                }}
                >
                {item.name}
            </Link>
            </li>)
        })
        
        // console.log("Subnavigation")
        // console.log(props.match.url)
    return (
        <aside className={classes.SubNavigation}>
            <H4 hClass="Black" hMb="Mmedium">Dostępne modele</H4>
            <ul className={classes.Navigation}>
                {navigationItems}
            </ul>
        </aside>
    )
}
}

export default SubNavigation