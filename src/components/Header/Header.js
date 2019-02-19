import React from 'react';
import classes from './Header.css';

import LinkButton from '../UI/LinkButton/LinkButton';
import ContactBoxes from '../../containers/Contact/ContactBoxes/ContactBoxes';

const header =props=>{
    // console.log(props)

    const headerData = {...props}

    // title:props.title,
    // info:props.info,
    // details:props.details,
    // actionBtn:props.actionBtn,
    // contactBoxes:props.contactBoxes

    // console.log(headerData)

    const {title,info,details,actionBtn,contactBoxes} = headerData
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <h1 className={classes.PageTitle}>{title}</h1>
                <p className={classes.PageInfo}>{info}</p>
                <p className={classes.PageDetails}>{details}</p>
                {actionBtn && <LinkButton actionBtn={actionBtn}/>
                // <LinkButton 
                //     btnClass={actionBtn.class}
                //     url={actionBtn.url}>{actionBtn.label}
                // </LinkButton>
                }
                {contactBoxes && <ContactBoxes contactBoxes={contactBoxes}/>}
                
            </div>
        </header>
    )
}

export default header