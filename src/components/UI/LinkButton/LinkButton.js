import React from 'react';
import classes from './LinkButton.css';

const linkButton = props => {

    const btnClass = [classes.LinkButton,classes[props.btnClass]].join(' ');

    return (

        <a href="/" className={btnClass}>{props.children}</a>
    )
}



export default linkButton