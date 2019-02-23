import React from 'react';
import classes from './Header.css';

import LinkButton from '../UI/LinkButton/LinkButton';
import ContactBoxes from '../../containers/Contact/ContactBoxes/ContactBoxes';

const header =props=>{
  
    
    const hClasses = [classes.Header,classes[props.page]].join(' ')

    return (
        <header className={hClasses}>
            <div className={classes.Container}>
                <h1 className={classes.PageTitle}>{props.title}</h1>
                <p className={classes.PageInfo}>{props.info}</p>
                <p className={classes.PageDetails}>{props.details}</p>
                {props.actionBtn && <LinkButton actionBtn={props.actionBtn}/>}
                {props.contactBoxes && <ContactBoxes contactBoxes={props.contactBoxes}/>}
            </div>
        </header>
    )
}

export default header