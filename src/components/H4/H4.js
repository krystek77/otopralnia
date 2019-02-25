import React from 'react';
import classes from './H4.css';

const h4 = props => {

    const hClass = [classes.Title,classes[props.hClass]].join(' ')

    return (
        <h4 className={hClass}>{props.children}</h4>
    )
}

export default h4;