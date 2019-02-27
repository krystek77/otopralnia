import React from 'react';
import classes from './H5.css';

const h5 = props => {

    const hClass = [classes.Title,classes[props.hClass],classes[props.hSize],classes[props.hMb]].join(' ')

    return (
        <h5 className={hClass}>{props.children}</h5>
    )
}

export default h5;