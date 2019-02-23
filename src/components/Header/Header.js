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

    //console.log(headerData)

    const {id,title,info,details,actionBtn,contactBoxes} = headerData
    let page = ""

    switch(id){
        case 1:console.log("1"); page="Home";break;
        case 2:console.log("2"); page="Customers";break;
        case 3:console.log("3"); page="Equipment";break;
        case 4:console.log("4"); page="Technology";break;
        case 5:console.log("5"); page="Recycling";break;
        case 6:console.log("6"); page="Blog";break;
        case 7:console.log("7"); page="AboutUs";break;
        case 8:console.log("8"); page="Contact";break;
        default:console.log("default");page="";
    }
    const hClasses = [classes.Header,classes[page]].join(' ')
    return (
        <header className={hClasses}>
            <div className={classes.Container}>
                <h1 className={classes.PageTitle}>{title}</h1>
                <p className={classes.PageInfo}>{info}</p>
                <p className={classes.PageDetails}>{details}</p>
                {actionBtn && <LinkButton actionBtn={actionBtn}/>}
                {contactBoxes && <ContactBoxes contactBoxes={contactBoxes}/>}
            </div>
        </header>
    )
}

export default header