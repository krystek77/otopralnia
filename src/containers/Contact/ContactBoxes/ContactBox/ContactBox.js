import React from 'react';
import classes from './ContactBox.css';

const contactBox = props => {

    return(
        <div className={classes.ContactBox}>
            <div className={classes.ContactBoxTitle}>
                {props.title}
            </div>
            <div className={classes.ContactBoxPhone}>
                <a className={classes.Phone} 
                href={`tel:${props.phone}`}>
                {props.phoneLabel}
                </a>
            </div>
            <div className={classes.ContactBoxEmail}>
                <a className={classes.Email}
                href={`mailto:${props.email}`}>
                {props.emailLabel}
                </a>
            </div>
        </div>
    )
}

export default contactBox