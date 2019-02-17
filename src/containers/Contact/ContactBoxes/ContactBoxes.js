import React from 'react';
import classes from './ContactBoxes.css';


import ContactBox from './ContactBox/ContactBox';


const contactBoxes = props => {
    // console.log(props.contactBoxes)

    const contactBoxes = [
        props.contactBoxes.seller,
        props.contactBoxes.service,
        props.contactBoxes.spareParts
    ].map((box)=><ContactBox 
        key={box.id}
        title={box.title}
        phone={box.phone}
        phoneLabel={box.phoneLabel}
        email={box.email}
        emailLabel={box.emailLabel}
    />)

    console.log(contactBoxes)

    return(
        <div className={classes.ContactBoxes}>
            {contactBoxes}
        </div>
    )
}
export default contactBoxes
