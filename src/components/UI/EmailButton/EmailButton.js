import React from 'react';
import classes from './EmailButton.css';

const emailButton = props => {
    const btnClass = [classes.EmailButton,classes[props.btnClass]].join(' ');

    return (

        <a 
            href={props.mailto} 
            className={btnClass}>
            {props.children}
        </a>
    )
}

export default emailButton