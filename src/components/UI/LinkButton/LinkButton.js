import React from 'react';
import classes from './LinkButton.css';
import {Link} from 'react-router-dom';

const linkButton = props => {

    
    const {label,url,bClass} = props.actionBtn
    const btnClass = [classes.LinkButton,classes[bClass]].join(' ');

    return (

        <Link 
            to={{
                pathname:url
            }} 
            className={btnClass}>
            {label}
        </Link>
    )
}



export default linkButton