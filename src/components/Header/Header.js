import React from 'react';
import classes from './Header.css';

import LinkButton from '../UI/LinkButton/LinkButton';

const header =props=>{
    console.log(props)

    
    
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <h1 className={classes.PageTitle}>{props.title}</h1>
                <p className={classes.PageInfo}>{props.info}</p>
                <p className={classes.PageDetails}>{props.details}</p>
                {props.actionBtn && 
                <LinkButton 
                    btnClass={props.actionBtn.class}
                    url={props.actionBtn.url}>{props.actionBtn.label}
                </LinkButton>
                }
            </div>
        </header>
    )
}

export default header