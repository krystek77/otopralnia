import React from 'react';
import classes from './Logo.css';

import {Link} from 'react-router-dom';

import logoPralma from '../../assets/images/pralma_logo.png';

const logo = (props) => {
        // console.log("logo")
        // console.log(props)
    return (
        <Link to="/" className={classes.Logo}>
            <img src={logoPralma} alt="Logo PPUP Pralma"/>
        </Link>
    )
}


export default logo