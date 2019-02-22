import React from 'react';
import classes from './H3.css';

const h3 = props => {

    const hClass = [classes.Title,classes[props.hClass]].join(' ')

    return (
        <h3 className={hClass}>{props.children}</h3>
    )
}

export default h3;