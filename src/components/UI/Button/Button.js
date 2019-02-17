import React from 'react';
import classes from './Button.css';

const button = props => {


    const btnClass = [classes.Button,classes[props.btnClass]].join(' ');

    return (
        <button className={btnClass}>{props.children}</button>
    )
}



export default button