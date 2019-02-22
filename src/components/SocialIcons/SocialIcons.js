import React from 'react';
import classes from './SocialIcons.css';

import SocialIcon from './SocialIcon/SocialIcon';
import {FaTwitterSquare,FaGooglePlus,FaYoutubeSquare,FaInstagram, FaFacebookSquare} from 'react-icons/fa';

const socialIcons = (props) => (
    <div className={classes.SocialIcons}>
        <SocialIcon place={props.place} name="Facebook" socialLink="https://pl-pl.facebook.com"><FaFacebookSquare/></SocialIcon>
        <SocialIcon place={props.place} name="Twitter" socialLink="https://twitter.com/?lang=pl"><FaTwitterSquare/></SocialIcon>
        <SocialIcon place={props.place} name="GooglePlus" socialLink="https://plus.google.com"><FaGooglePlus/></SocialIcon>
        <SocialIcon place={props.place} name="Instagram" socialLink="https://www.instagram.pl"><FaInstagram/></SocialIcon>
        <SocialIcon place={props.place} name="Youtube" socialLink="https://www.youtube.pl"><FaYoutubeSquare/></SocialIcon>
    </div>
)

export default socialIcons