import React from 'react';
import classes from './SocialIcon.css';
/*
* for example props.name = "Facebook"
* socialLink = "https://www.facebook.pl"
*/
const socialIcon = props => {

    const socialClass = [classes.SocialIcon,classes[props.name],classes[props.place]].join(' ')

    return (
            <a className={socialClass} href={props.socialLink} rel="noopener norefferer">{props.children}</a>
        
    )
}
export default socialIcon