import React from 'react';
import classes from './Backdrop.css';

const backdrop = props =>{

    const backDropClass = [classes.Backdrop,classes[props.backDropColor],classes[props.backDropWidth]].join(' ')

    return (
        <div className={backDropClass}></div>
    )
}

export default backdrop;