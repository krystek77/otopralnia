import React from 'react';
import classes from './LinkButton.css';
import {Link} from 'react-router-dom';

const linkButton = props => {


    const btnClass = [classes.LinkButton,classes[props.btnClass]].join(' ');

    return (

        <Link 
            to={{
                pathname:props.url
            }} 
            className={btnClass}>
            {props.children}
        </Link>
    )
}



export default linkButton