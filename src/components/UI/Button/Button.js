import React from 'react';
import classes from './Button.css';

const button = props => {

    const active = props.active
    const animation = props.animation
    let btnClass = [classes.Button,classes[props.btnClass],classes[props.fontSize],classes[props.padding],classes[props.last],classes[props.noBorder]];

    if(active){
        btnClass = btnClass.concat([classes.Active]).join(' ')
    }
    else {
        if(animation){
            btnClass = btnClass.concat([classes.Animation]).join(' ')
        }
        else {
            btnClass = btnClass.join(' ');
        }
    }
    

    return (
        <button 
            className={btnClass}
            onClick = {props.clicked}
        >{props.children}</button>
    )
}



export default button