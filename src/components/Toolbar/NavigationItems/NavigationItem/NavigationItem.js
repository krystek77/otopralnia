import React from 'react';
import classes from './NavigationItem.css';

import {NavLink} from 'react-router-dom';

const navigationItem = props => {

    const itemClass = [classes.NavigationItem,classes[props.last]].join(' ')
    return (
        <li 
            className={itemClass}>
            <NavLink 
                to={props.link} 
                className={classes.NavigationLink}
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem